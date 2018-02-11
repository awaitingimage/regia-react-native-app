#ifdef __OBJC__
#import <UIKit/UIKit.h>
#else
#ifndef FOUNDATION_EXPORT
#if defined(__cplusplus)
#define FOUNDATION_EXPORT extern "C"
#else
#define FOUNDATION_EXPORT extern
#endif
#endif
#endif

#import "GAI.h"
#import "GAIDictionaryBuilder.h"
#import "GAIEcommerceFields.h"
#import "GAIEcommerceProduct.h"
#import "GAIEcommerceProductAction.h"
#import "GAIEcommercePromotion.h"
#import "GAIFields.h"
#import "GAILogger.h"
#import "GAITrackedViewController.h"
#import "GAITracker.h"
#import "TAGContainer.h"
#import "TAGContainerOpener.h"
#import "TAGDataLayer.h"
#import "TAGLogger.h"
#import "TAGManager.h"
#import "RCTGoogleAnalyticsBridge.h"
#import "RCTGoogleTagManagerBridge.h"

FOUNDATION_EXPORT double react_native_google_analytics_bridgeVersionNumber;
FOUNDATION_EXPORT const unsigned char react_native_google_analytics_bridgeVersionString[];

