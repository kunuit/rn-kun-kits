
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNRnKunKitsSpec.h"

@interface RnKunKits : NSObject <NativeRnKunKitsSpec>
#else
#import <React/RCTBridgeModule.h>

@interface RnKunKits : NSObject <RCTBridgeModule>
#endif

@end
