import * as util from './util';

export default function add() {
  const ovserver = util.getOvserber();
  util.query('.list-2-item').forEach(item => {
    ovserver.observe(item);
  });
};