'use strict';

const times = require('./data/times.js');

const metTime = new Date(times.firstTimeMet);
const today = new Date().getTime();
const delta = Math.abs(today - metTime) / 1000;

module.exports.getFirstTimeMet = () => {
  return times.firstTimeMet;
};

module.exports.getSinceIMetYou = () => {
  return Math.floor(delta / 86400);
};

module.exports.getSinceIMetYouDetail = () => {
  let delta = Math.abs(today - metTime) / 1000;

  const days = Math.floor(delta / 86400);
  delta -= days * 86400;
  const hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;
  const minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;
  const seconds = Math.floor(delta % 60);

  return {days, hours, minutes, seconds};
};
