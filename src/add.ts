export default async function add(): Promise<any> {
  const { query, getOvserber } = await import(/* webpackChunkName:"util" */ './util');
  const ovserver = getOvserber();
  query('.list-2-item').forEach(item => {
    ovserver.observe(item);
  });
};