import {
  test as ShopwellTestSuite,
  mergeTests,
} from '@shopwell-ag/acceptance-test-suite';
import type { FixtureTypes as BaseTypes } from '@shopwell-ag/acceptance-test-suite';

export * from '@shopwell-ag/acceptance-test-suite';

export type FixtureTypes = BaseTypes;

export const test = mergeTests(ShopwellTestSuite);
