import { LOAD_FIFTEEN_AMPERES, LOAD_FIVE_AMPERES, LOAD_SIXTY_AMPERES, LOAD_THIRTY_AMPERES } from './consts';

export const priceWithLoadCapacity = {
  [LOAD_FIVE_AMPERES]: {
    upto20: {
      minUnits: 0,
      maxUnits: 20,
      serviceCharge: 30,
      energyCharge: 3,
    },
    upto30: {
      minUnits: 21,
      maxUnits: 30,
      serviceCharge: 50,
      energyCharge: 7,
    },
    upto50: {
      minUnits: 31,
      maxUnits: 50,
      serviceCharge: 75,
      energyCharge: 8.5,
    },
    upto150: {
      minUnits: 51,
      maxUnits: 150,
      serviceCharge: 100,
      energyCharge: 10,
    },
    upto250: {
      minUnits: 151,
      maxUnits: 250,
      serviceCharge: 125,
      energyCharge: 11,
    },
    upto400: {
      minUnits: 251,
      maxUnits: 400,
      serviceCharge: 150,
      energyCharge: 12,
    },
    above400: {
      minUnits: 401,
      maxUnits: 10000,
      serviceCharge: 175,
      energyCharge: 13,
    },
  },
  [LOAD_FIFTEEN_AMPERES]: {
    upto20: {
      minUnits: 0,
      maxUnits: 20,
      serviceCharge: 50,
      energyCharge: 4,
    },
    upto30: {
      minUnits: 21,
      maxUnits: 30,
      serviceCharge: 75,
      energyCharge: 7,
    },
    upto50: {
      minUnits: 31,
      maxUnits: 50,
      serviceCharge: 100,
      energyCharge: 8.5,
    },
    upto150: {
      minUnits: 51,
      maxUnits: 150,
      serviceCharge: 125,
      energyCharge: 10,
    },
    upto250: {
      minUnits: 151,
      maxUnits: 250,
      serviceCharge: 150,
      energyCharge: 11,
    },
    upto400: {
      minUnits: 251,
      maxUnits: 400,
      serviceCharge: 175,
      energyCharge: 12,
    },
    above400: {
      minUnits: 401,
      maxUnits: 10000,
      serviceCharge: 200,
      energyCharge: 13,
    },
  },
  [LOAD_THIRTY_AMPERES]: {
    upto20: {
      minUnits: 0,
      maxUnits: 20,
      serviceCharge: 75,
      energyCharge: 5,
    },
    upto30: {
      minUnits: 21,
      maxUnits: 30,
      serviceCharge: 100,
      energyCharge: 7,
    },
    upto50: {
      minUnits: 31,
      maxUnits: 50,
      serviceCharge: 125,
      energyCharge: 8.5,
    },
    upto150: {
      minUnits: 51,
      maxUnits: 150,
      serviceCharge: 150,
      energyCharge: 10,
    },
    upto250: {
      minUnits: 151,
      maxUnits: 250,
      serviceCharge: 175,
      energyCharge: 11,
    },
    upto400: {
      minUnits: 251,
      maxUnits: 400,
      serviceCharge: 200,
      energyCharge: 12,
    },
    above400: {
      minUnits: 401,
      maxUnits: 10000,
      serviceCharge: 225,
      energyCharge: 13,
    },
  },
  [LOAD_SIXTY_AMPERES]: {
    upto20: {
      minUnits: 0,
      maxUnits: 20,
      serviceCharge: 125,
      energyCharge: 6,
    },
    upto30: {
      minUnits: 21,
      maxUnits: 30,
      serviceCharge: 150,
      energyCharge: 7,
    },
    upto50: {
      minUnits: 31,
      maxUnits: 50,
      serviceCharge: 175,
      energyCharge: 8.5,
    },
    upto150: {
      minUnits: 51,
      maxUnits: 150,
      serviceCharge: 200,
      energyCharge: 10,
    },
    upto250: {
      minUnits: 151,
      maxUnits: 250,
      serviceCharge: 225,
      energyCharge: 11,
    },
    upto400: {
      minUnits: 251,
      maxUnits: 400,
      serviceCharge: 250,
      energyCharge: 12,
    },
    above400: {
      minUnits: 401,
      maxUnits: 10000,
      serviceCharge: 275,
      energyCharge: 13,
    },
  },
};

export const calcAmount = (costArray, totalUnitsConsumed) => {
  console.log('calc----', costArray, totalUnitsConsumed);
  let units = totalUnitsConsumed;
  let amount = 0;
  const loopArrays = Object.values(costArray);
  console.log('check----', loopArrays);
  for (let i = 0; i < loopArrays.length; i++) {
    let activeObj = loopArrays[i];
    if (units <= activeObj.maxUnits) {
      amount = amount + units * activeObj.energyCharge + activeObj.serviceCharge;
      break;
    }else {
      amount = amount + units * activeObj.energyCharge + activeObj.serviceCharge;
      units = units - activeObj.maxUnits
    }
  }
  // while (units > 0) {
  //   switch (true) {
  //     case costArray.upto20.maxUnits > units:
  //       amount = amount + costArray.upto20.serviceCharge + 20 * 3;
  //       units = units - 20;
  //       break;
  //     case costArray.upto30.maxUnits < units:
  //       amount = amount + costArray.upto30.serviceCharge + 20 * 3;
  //       units = units - 30;
  //       break;
  //     default:
  //       break;
  //   }
  // }
  console.log('result -----', amount);
};

export const calculateBillAmount = () => {
  let totalBillAmt = null;
  const load = LOAD_FIVE_AMPERES;
  const previousUnit = 10;
  const currentUnit = 50;

  // const totalUnitDifference = unitDifference ? units : currentUnit - previousUnit;
  const totalUnitDifference = currentUnit - previousUnit;
  switch (load) {
    case LOAD_FIVE_AMPERES:
      // eslint-disable-next-line no-case-declarations
      const costArray = priceWithLoadCapacity.fiveAmp;
      if (totalUnitDifference <= costArray.upto20.maxUnits) {
        totalBillAmt = costArray.upto20.serviceCharge;
        break;
      }
      calcAmount(costArray, totalUnitDifference);
      break;

    default:
      break;
  }

  return totalBillAmt;
};
