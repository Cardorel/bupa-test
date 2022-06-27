module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "x-api-key",
            value: "fZi8YcjrZN1cGkQeZP7Uaa4rTxua8HovaswPuIno",
          },
        ],
      },
    ];
  },
};
