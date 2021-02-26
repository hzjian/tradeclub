rm -rf ./ios/pods
sudo gem install -n /usr/local/bin cocoapods
pod install


use_flipper!({ 'Flipper-Folly' => '2.3.0' })

pod update