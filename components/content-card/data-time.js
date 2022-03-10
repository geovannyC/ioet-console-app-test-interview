//Data Days
 const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
//Data format Stages
 const format = {
  mon_fri: {
    stage1: {
      start: "00:01",
      end: "09:00",
      price: 25,
    },
    stage2: {
      start: "09:01",
      end: "18:00",
      price: 15,
    },
    stage3: {
      start: "18:01",
      end: "00:00",
      price: 20,
    },
  },
  weekend: {
    stage1: {
      start: "00:01",
      end: "09:00",
      price: 30,
    },
    stage2: {
      start: "09:01",
      end: "18:00",

      price: 20,
    },
    stage3: {
      start: "18:01",
      end: "00:00",
      price: 25,
    },
  },
};
module.exports={
  days,
  format
}