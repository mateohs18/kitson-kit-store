import { useEffect, useState } from "react";

interface AnalyticsEvent {
  event: string;
  properties: Record<string, any>;
  timestamp: number;
}

class Analytics {
  private events: AnalyticsEvent[] = [];
  private isEnabled: boolean = true;

  track(event: string, properties: Record<string, any> = {}) {
    if (!this.isEnabled) return;

    const analyticsEvent: AnalyticsEvent = {
      event,
      properties: {
        ...properties,
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        sessionId: this.getSessionId()
      },
      timestamp: Date.now()
    };

    this.events.push(analyticsEvent);
    
    // In a real app, you would send this to your analytics service
    console.log('Analytics Event:', analyticsEvent);
    
    // Store locally for demo purposes
    this.storeLocally(analyticsEvent);
  }

  pageView(path: string, title?: string) {
    this.track('page_view', {
      path,
      title: title || document.title,
      referrer: document.referrer
    });
  }

  identify(userId: string, traits: Record<string, any> = {}) {
    this.track('identify', {
      userId,
      traits
    });
  }

  ecommerce = {
    viewProduct: (productId: string, productName: string, category: string, price: number) => {
      this.track('product_viewed', {
        product_id: productId,
        product_name: productName,
        category,
        price,
        currency: 'USD'
      });
    },

    addToCart: (productId: string, productName: string, price: number, quantity: number = 1) => {
      this.track('add_to_cart', {
        product_id: productId,
        product_name: productName,
        price,
        quantity,
        value: price * quantity,
        currency: 'USD'
      });
    },

    beginCheckout: (cartValue: number, itemCount: number) => {
      this.track('begin_checkout', {
        value: cartValue,
        currency: 'USD',
        num_items: itemCount
      });
    },

    purchase: (transactionId: string, value: number, items: any[]) => {
      this.track('purchase', {
        transaction_id: transactionId,
        value,
        currency: 'USD',
        items
      });
    }
  };

  private getSessionId(): string {
    let sessionId = sessionStorage.getItem('analytics_session_id');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('analytics_session_id', sessionId);
    }
    return sessionId;
  }

  private storeLocally(event: AnalyticsEvent) {
    const stored = localStorage.getItem('analytics_events') || '[]';
    const events = JSON.parse(stored);
    events.push(event);
    
    // Keep only last 100 events
    if (events.length > 100) {
      events.splice(0, events.length - 100);
    }
    
    localStorage.setItem('analytics_events', JSON.stringify(events));
  }

  getEvents(): AnalyticsEvent[] {
    const stored = localStorage.getItem('analytics_events') || '[]';
    return JSON.parse(stored);
  }

  enable() {
    this.isEnabled = true;
  }

  disable() {
    this.isEnabled = false;
  }
}

export const analytics = new Analytics();

// Hook for performance tracking
export const usePerformanceTracking = () => {
  useEffect(() => {
    // Track page load performance
    const trackPageLoad = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        analytics.track('page_performance', {
          dom_content_loaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          load_complete: navigation.loadEventEnd - navigation.loadEventStart,
          first_contentful_paint: navigation.responseStart - navigation.requestStart,
          connection_type: (navigator as any).connection?.effectiveType || 'unknown'
        });
      }
    };

    // Track Core Web Vitals
    const trackWebVitals = () => {
      if ('web-vitals' in window) {
        // In a real app, you would import from 'web-vitals' library
        // getCLS(analytics.track.bind(analytics, 'core_web_vital_cls'));
        // getFID(analytics.track.bind(analytics, 'core_web_vital_fid'));
        // getLCP(analytics.track.bind(analytics, 'core_web_vital_lcp'));
      }
    };

    // Wait for page load
    if (document.readyState === 'complete') {
      trackPageLoad();
    } else {
      window.addEventListener('load', trackPageLoad);
    }

    trackWebVitals();

    return () => {
      window.removeEventListener('load', trackPageLoad);
    };
  }, []);
};

// Hook for user interaction tracking
export const useInteractionTracking = () => {
  useEffect(() => {
    const trackScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent === 25 || scrollPercent === 50 || scrollPercent === 75 || scrollPercent === 100) {
        analytics.track('scroll_depth', { percent: scrollPercent });
      }
    };

    const trackTimeOnPage = () => {
      const startTime = Date.now();
      
      return () => {
        const timeOnPage = Date.now() - startTime;
        analytics.track('time_on_page', { 
          duration: timeOnPage,
          duration_seconds: Math.round(timeOnPage / 1000)
        });
      };
    };

    const cleanup = trackTimeOnPage();
    
    window.addEventListener('scroll', trackScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', trackScroll);
      cleanup();
    };
  }, []);
};
