const webPush = require("web-push");

webPush.setVapidDetails(
  `mailto:test@test.com`,
  process.env.NEXT_PUBLIC_PUSH_PUBLIC_KEY,
  process.env.NEXT_PUBLIC_PUSH_PRIVATE_KEY
);

export default (req, res) => {
  if (req.method == "POST") {
    const { subscription } = req.body;
    console.log("Called");
    console.log(subscription);
    webPush
      .sendNotification(
        subscription,
        JSON.stringify({
          title: "Bike Therapist",
          message: "New Booking !!",
        })
      )
      .then((response) => {
        res.writeHead(response.statusCode, response.headers).end(response.body);
      })
      .catch((err) => {
        if ("statusCode" in err) {
          res.writeHead(err.statusCode, err.headers).end(err.body);
        } else {
          console.error(err);
          res.statusCode = 500;
          res.end();
        }
      });
  } else {
    res.statusCode = 405;
    res.end();
  }
};
