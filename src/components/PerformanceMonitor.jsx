"use client";
import { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Web Vitals monitoring
    const reportWebVitals = (metric) => {
      // Log performance metrics in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`${metric.name}: ${metric.value}ms`, metric);
      }
      
      // Send to analytics in production
      if (typeof gtag !== 'undefined') {
        gtag('event', metric.name, {
          event_category: 'Web Vitals',
          value: Math.round(metric.value),
          event_label: metric.id,
          non_interaction: true,
        });
      }
    };

    // Monitor Core Web Vitals
    onCLS(reportWebVitals);
    onINP(reportWebVitals);
    onFCP(reportWebVitals);
    onLCP(reportWebVitals);
    onTTFB(reportWebVitals);

    // Monitor additional performance metrics
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      if (process.env.NODE_ENV === 'development') {
        console.log(`Page load time: ${loadTime}ms`);
      }
    });

    // Monitor navigation timing
    if ('performance' in window && 'getEntriesByType' in performance) {
      setTimeout(() => {
        const navigationTiming = performance.getEntriesByType('navigation')[0];
        if (navigationTiming && process.env.NODE_ENV === 'development') {
          console.log('Navigation timing:', {
            DNS: Math.round(navigationTiming.domainLookupEnd - navigationTiming.domainLookupStart),
            TCP: Math.round(navigationTiming.connectEnd - navigationTiming.connectStart),
            Request: Math.round(navigationTiming.responseStart - navigationTiming.requestStart),
            Response: Math.round(navigationTiming.responseEnd - navigationTiming.responseStart),
            DOM: Math.round(navigationTiming.domContentLoadedEventEnd - navigationTiming.domContentLoadedEventStart),
          });
        }
      }, 1000);
    }
  }, []);

  return null;
};

export default PerformanceMonitor;