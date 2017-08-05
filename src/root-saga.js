import { sampleWatcher } from './containers/Users/saga';

const root = function* rootSaga() {
  yield [
    sampleWatcher()
  ];
};

export default root;
