const totp = require("totp-generator");

module.exports.templateTags = [
  {
    name: "TOTP",
    displayName: "TOTP",
    description: "Generate TOTP Code",
    args: [
      {
        displayName: "MFA Secret",
        description: "MFA Secret",
        type: "string",
        defaultValue: "YOUR_MFA_SECRET",
      },
      {
        displayName: "Period",
        description: "Period",
        type: "number",
        defaultValue: 60,
      },
    ],
    async run(context, mfaSecret, period) {
      const token = totp(mfaSecret, { period: period });
      console.log(token);
      return token;
    },
  },
];
