
## How to Install
---
1. Download **insomnia-plugin-totp-generator** as ZIP and extract with same foldername.
2. Go to Insomnia/Preferences and choose the Plugins tab
3. Click on **Reveal Plugins Folder**
4. Copy **insomnia-plugin-totp-generator** folder to plugins folder.  

## How to Configure and Generate Token
---
1. Click ctrl + space for auto complete menu (In request body)
2. Put MFA Secret and Period in field
3. Click on save
4. Or Directly you can put expression like ```"{% TOTP 'B2H2C3INTKTFUMGO6DJ6IKVRWQRGPBUP', 600 %}"```
