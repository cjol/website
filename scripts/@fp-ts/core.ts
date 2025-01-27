import * as H from '@fp-ts/core/HKT'

const HKT: Omit<typeof H, never> = H

export type TypeLambda = H.TypeLambda
export type Kind<F extends H.TypeLambda, InOut1, In1, Out3, Out2, Out1> = H.Kind<F, InOut1, In1, Out3, Out2, Out1>
export type TypeClass<F extends H.TypeLambda> = H.TypeClass<F>

export {
  /**
   * @model TypeLambda
   * @model Kind
   * @model TypeClass
   */
  HKT,
}
