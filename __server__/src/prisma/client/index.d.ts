
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Equipamentos
 * 
 */
export type Equipamentos = $Result.DefaultSelection<Prisma.$EquipamentosPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Equipamentos
 * const equipamentos = await prisma.equipamentos.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Equipamentos
   * const equipamentos = await prisma.equipamentos.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.equipamentos`: Exposes CRUD operations for the **Equipamentos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipamentos
    * const equipamentos = await prisma.equipamentos.findMany()
    * ```
    */
  get equipamentos(): Prisma.EquipamentosDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Equipamentos: 'Equipamentos'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'equipamentos'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Equipamentos: {
        payload: Prisma.$EquipamentosPayload<ExtArgs>
        fields: Prisma.EquipamentosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipamentosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquipamentosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipamentosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquipamentosPayload>
          }
          findFirst: {
            args: Prisma.EquipamentosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquipamentosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipamentosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquipamentosPayload>
          }
          findMany: {
            args: Prisma.EquipamentosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquipamentosPayload>[]
          }
          create: {
            args: Prisma.EquipamentosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquipamentosPayload>
          }
          createMany: {
            args: Prisma.EquipamentosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EquipamentosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquipamentosPayload>
          }
          update: {
            args: Prisma.EquipamentosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquipamentosPayload>
          }
          deleteMany: {
            args: Prisma.EquipamentosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EquipamentosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EquipamentosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquipamentosPayload>
          }
          aggregate: {
            args: Prisma.EquipamentosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEquipamentos>
          }
          groupBy: {
            args: Prisma.EquipamentosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EquipamentosGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipamentosCountArgs<ExtArgs>,
            result: $Utils.Optional<EquipamentosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Equipamentos
   */

  export type AggregateEquipamentos = {
    _count: EquipamentosCountAggregateOutputType | null
    _avg: EquipamentosAvgAggregateOutputType | null
    _sum: EquipamentosSumAggregateOutputType | null
    _min: EquipamentosMinAggregateOutputType | null
    _max: EquipamentosMaxAggregateOutputType | null
  }

  export type EquipamentosAvgAggregateOutputType = {
    id: number | null
    idBarra: number | null
    barraDe: number | null
    barraPara: number | null
    idLinha: number | null
  }

  export type EquipamentosSumAggregateOutputType = {
    id: number | null
    idBarra: number | null
    barraDe: number | null
    barraPara: number | null
    idLinha: number | null
  }

  export type EquipamentosMinAggregateOutputType = {
    id: number | null
    tipo: string | null
    idBarra: number | null
    barraDe: number | null
    barraPara: number | null
    idLinha: number | null
  }

  export type EquipamentosMaxAggregateOutputType = {
    id: number | null
    tipo: string | null
    idBarra: number | null
    barraDe: number | null
    barraPara: number | null
    idLinha: number | null
  }

  export type EquipamentosCountAggregateOutputType = {
    id: number
    tipo: number
    idBarra: number
    barraDe: number
    barraPara: number
    idLinha: number
    _all: number
  }


  export type EquipamentosAvgAggregateInputType = {
    id?: true
    idBarra?: true
    barraDe?: true
    barraPara?: true
    idLinha?: true
  }

  export type EquipamentosSumAggregateInputType = {
    id?: true
    idBarra?: true
    barraDe?: true
    barraPara?: true
    idLinha?: true
  }

  export type EquipamentosMinAggregateInputType = {
    id?: true
    tipo?: true
    idBarra?: true
    barraDe?: true
    barraPara?: true
    idLinha?: true
  }

  export type EquipamentosMaxAggregateInputType = {
    id?: true
    tipo?: true
    idBarra?: true
    barraDe?: true
    barraPara?: true
    idLinha?: true
  }

  export type EquipamentosCountAggregateInputType = {
    id?: true
    tipo?: true
    idBarra?: true
    barraDe?: true
    barraPara?: true
    idLinha?: true
    _all?: true
  }

  export type EquipamentosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipamentos to aggregate.
     */
    where?: EquipamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipamentos to fetch.
     */
    orderBy?: EquipamentosOrderByWithRelationInput | EquipamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipamentos
    **/
    _count?: true | EquipamentosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipamentosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipamentosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipamentosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipamentosMaxAggregateInputType
  }

  export type GetEquipamentosAggregateType<T extends EquipamentosAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipamentos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipamentos[P]>
      : GetScalarType<T[P], AggregateEquipamentos[P]>
  }




  export type EquipamentosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipamentosWhereInput
    orderBy?: EquipamentosOrderByWithAggregationInput | EquipamentosOrderByWithAggregationInput[]
    by: EquipamentosScalarFieldEnum[] | EquipamentosScalarFieldEnum
    having?: EquipamentosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipamentosCountAggregateInputType | true
    _avg?: EquipamentosAvgAggregateInputType
    _sum?: EquipamentosSumAggregateInputType
    _min?: EquipamentosMinAggregateInputType
    _max?: EquipamentosMaxAggregateInputType
  }

  export type EquipamentosGroupByOutputType = {
    id: number
    tipo: string
    idBarra: number
    barraDe: number | null
    barraPara: number | null
    idLinha: number | null
    _count: EquipamentosCountAggregateOutputType | null
    _avg: EquipamentosAvgAggregateOutputType | null
    _sum: EquipamentosSumAggregateOutputType | null
    _min: EquipamentosMinAggregateOutputType | null
    _max: EquipamentosMaxAggregateOutputType | null
  }

  type GetEquipamentosGroupByPayload<T extends EquipamentosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipamentosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipamentosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipamentosGroupByOutputType[P]>
            : GetScalarType<T[P], EquipamentosGroupByOutputType[P]>
        }
      >
    >


  export type EquipamentosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    idBarra?: boolean
    barraDe?: boolean
    barraPara?: boolean
    idLinha?: boolean
  }, ExtArgs["result"]["equipamentos"]>

  export type EquipamentosSelectScalar = {
    id?: boolean
    tipo?: boolean
    idBarra?: boolean
    barraDe?: boolean
    barraPara?: boolean
    idLinha?: boolean
  }


  export type $EquipamentosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipamentos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo: string
      idBarra: number
      barraDe: number | null
      barraPara: number | null
      idLinha: number | null
    }, ExtArgs["result"]["equipamentos"]>
    composites: {}
  }


  type EquipamentosGetPayload<S extends boolean | null | undefined | EquipamentosDefaultArgs> = $Result.GetResult<Prisma.$EquipamentosPayload, S>

  type EquipamentosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EquipamentosFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: EquipamentosCountAggregateInputType | true
    }

  export interface EquipamentosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipamentos'], meta: { name: 'Equipamentos' } }
    /**
     * Find zero or one Equipamentos that matches the filter.
     * @param {EquipamentosFindUniqueArgs} args - Arguments to find a Equipamentos
     * @example
     * // Get one Equipamentos
     * const equipamentos = await prisma.equipamentos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EquipamentosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EquipamentosFindUniqueArgs<ExtArgs>>
    ): Prisma__EquipamentosClient<$Result.GetResult<Prisma.$EquipamentosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Equipamentos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EquipamentosFindUniqueOrThrowArgs} args - Arguments to find a Equipamentos
     * @example
     * // Get one Equipamentos
     * const equipamentos = await prisma.equipamentos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EquipamentosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EquipamentosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EquipamentosClient<$Result.GetResult<Prisma.$EquipamentosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Equipamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamentosFindFirstArgs} args - Arguments to find a Equipamentos
     * @example
     * // Get one Equipamentos
     * const equipamentos = await prisma.equipamentos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EquipamentosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EquipamentosFindFirstArgs<ExtArgs>>
    ): Prisma__EquipamentosClient<$Result.GetResult<Prisma.$EquipamentosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Equipamentos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamentosFindFirstOrThrowArgs} args - Arguments to find a Equipamentos
     * @example
     * // Get one Equipamentos
     * const equipamentos = await prisma.equipamentos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EquipamentosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EquipamentosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EquipamentosClient<$Result.GetResult<Prisma.$EquipamentosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Equipamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamentosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipamentos
     * const equipamentos = await prisma.equipamentos.findMany()
     * 
     * // Get first 10 Equipamentos
     * const equipamentos = await prisma.equipamentos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipamentosWithIdOnly = await prisma.equipamentos.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EquipamentosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EquipamentosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipamentosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Equipamentos.
     * @param {EquipamentosCreateArgs} args - Arguments to create a Equipamentos.
     * @example
     * // Create one Equipamentos
     * const Equipamentos = await prisma.equipamentos.create({
     *   data: {
     *     // ... data to create a Equipamentos
     *   }
     * })
     * 
    **/
    create<T extends EquipamentosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EquipamentosCreateArgs<ExtArgs>>
    ): Prisma__EquipamentosClient<$Result.GetResult<Prisma.$EquipamentosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Equipamentos.
     *     @param {EquipamentosCreateManyArgs} args - Arguments to create many Equipamentos.
     *     @example
     *     // Create many Equipamentos
     *     const equipamentos = await prisma.equipamentos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EquipamentosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EquipamentosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Equipamentos.
     * @param {EquipamentosDeleteArgs} args - Arguments to delete one Equipamentos.
     * @example
     * // Delete one Equipamentos
     * const Equipamentos = await prisma.equipamentos.delete({
     *   where: {
     *     // ... filter to delete one Equipamentos
     *   }
     * })
     * 
    **/
    delete<T extends EquipamentosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EquipamentosDeleteArgs<ExtArgs>>
    ): Prisma__EquipamentosClient<$Result.GetResult<Prisma.$EquipamentosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Equipamentos.
     * @param {EquipamentosUpdateArgs} args - Arguments to update one Equipamentos.
     * @example
     * // Update one Equipamentos
     * const equipamentos = await prisma.equipamentos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EquipamentosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EquipamentosUpdateArgs<ExtArgs>>
    ): Prisma__EquipamentosClient<$Result.GetResult<Prisma.$EquipamentosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Equipamentos.
     * @param {EquipamentosDeleteManyArgs} args - Arguments to filter Equipamentos to delete.
     * @example
     * // Delete a few Equipamentos
     * const { count } = await prisma.equipamentos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EquipamentosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EquipamentosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamentosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipamentos
     * const equipamentos = await prisma.equipamentos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EquipamentosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EquipamentosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Equipamentos.
     * @param {EquipamentosUpsertArgs} args - Arguments to update or create a Equipamentos.
     * @example
     * // Update or create a Equipamentos
     * const equipamentos = await prisma.equipamentos.upsert({
     *   create: {
     *     // ... data to create a Equipamentos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipamentos we want to update
     *   }
     * })
    **/
    upsert<T extends EquipamentosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EquipamentosUpsertArgs<ExtArgs>>
    ): Prisma__EquipamentosClient<$Result.GetResult<Prisma.$EquipamentosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Equipamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamentosCountArgs} args - Arguments to filter Equipamentos to count.
     * @example
     * // Count the number of Equipamentos
     * const count = await prisma.equipamentos.count({
     *   where: {
     *     // ... the filter for the Equipamentos we want to count
     *   }
     * })
    **/
    count<T extends EquipamentosCountArgs>(
      args?: Subset<T, EquipamentosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipamentosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamentosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipamentosAggregateArgs>(args: Subset<T, EquipamentosAggregateArgs>): Prisma.PrismaPromise<GetEquipamentosAggregateType<T>>

    /**
     * Group by Equipamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamentosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquipamentosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipamentosGroupByArgs['orderBy'] }
        : { orderBy?: EquipamentosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipamentosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipamentosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipamentos model
   */
  readonly fields: EquipamentosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipamentos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipamentosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Equipamentos model
   */ 
  interface EquipamentosFieldRefs {
    readonly id: FieldRef<"Equipamentos", 'Int'>
    readonly tipo: FieldRef<"Equipamentos", 'String'>
    readonly idBarra: FieldRef<"Equipamentos", 'Int'>
    readonly barraDe: FieldRef<"Equipamentos", 'Int'>
    readonly barraPara: FieldRef<"Equipamentos", 'Int'>
    readonly idLinha: FieldRef<"Equipamentos", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Equipamentos findUnique
   */
  export type EquipamentosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamentos
     */
    select?: EquipamentosSelect<ExtArgs> | null
    /**
     * Filter, which Equipamentos to fetch.
     */
    where: EquipamentosWhereUniqueInput
  }


  /**
   * Equipamentos findUniqueOrThrow
   */
  export type EquipamentosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamentos
     */
    select?: EquipamentosSelect<ExtArgs> | null
    /**
     * Filter, which Equipamentos to fetch.
     */
    where: EquipamentosWhereUniqueInput
  }


  /**
   * Equipamentos findFirst
   */
  export type EquipamentosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamentos
     */
    select?: EquipamentosSelect<ExtArgs> | null
    /**
     * Filter, which Equipamentos to fetch.
     */
    where?: EquipamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipamentos to fetch.
     */
    orderBy?: EquipamentosOrderByWithRelationInput | EquipamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipamentos.
     */
    cursor?: EquipamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipamentos.
     */
    distinct?: EquipamentosScalarFieldEnum | EquipamentosScalarFieldEnum[]
  }


  /**
   * Equipamentos findFirstOrThrow
   */
  export type EquipamentosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamentos
     */
    select?: EquipamentosSelect<ExtArgs> | null
    /**
     * Filter, which Equipamentos to fetch.
     */
    where?: EquipamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipamentos to fetch.
     */
    orderBy?: EquipamentosOrderByWithRelationInput | EquipamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipamentos.
     */
    cursor?: EquipamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipamentos.
     */
    distinct?: EquipamentosScalarFieldEnum | EquipamentosScalarFieldEnum[]
  }


  /**
   * Equipamentos findMany
   */
  export type EquipamentosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamentos
     */
    select?: EquipamentosSelect<ExtArgs> | null
    /**
     * Filter, which Equipamentos to fetch.
     */
    where?: EquipamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipamentos to fetch.
     */
    orderBy?: EquipamentosOrderByWithRelationInput | EquipamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipamentos.
     */
    cursor?: EquipamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipamentos.
     */
    skip?: number
    distinct?: EquipamentosScalarFieldEnum | EquipamentosScalarFieldEnum[]
  }


  /**
   * Equipamentos create
   */
  export type EquipamentosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamentos
     */
    select?: EquipamentosSelect<ExtArgs> | null
    /**
     * The data needed to create a Equipamentos.
     */
    data: XOR<EquipamentosCreateInput, EquipamentosUncheckedCreateInput>
  }


  /**
   * Equipamentos createMany
   */
  export type EquipamentosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipamentos.
     */
    data: EquipamentosCreateManyInput | EquipamentosCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Equipamentos update
   */
  export type EquipamentosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamentos
     */
    select?: EquipamentosSelect<ExtArgs> | null
    /**
     * The data needed to update a Equipamentos.
     */
    data: XOR<EquipamentosUpdateInput, EquipamentosUncheckedUpdateInput>
    /**
     * Choose, which Equipamentos to update.
     */
    where: EquipamentosWhereUniqueInput
  }


  /**
   * Equipamentos updateMany
   */
  export type EquipamentosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipamentos.
     */
    data: XOR<EquipamentosUpdateManyMutationInput, EquipamentosUncheckedUpdateManyInput>
    /**
     * Filter which Equipamentos to update
     */
    where?: EquipamentosWhereInput
  }


  /**
   * Equipamentos upsert
   */
  export type EquipamentosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamentos
     */
    select?: EquipamentosSelect<ExtArgs> | null
    /**
     * The filter to search for the Equipamentos to update in case it exists.
     */
    where: EquipamentosWhereUniqueInput
    /**
     * In case the Equipamentos found by the `where` argument doesn't exist, create a new Equipamentos with this data.
     */
    create: XOR<EquipamentosCreateInput, EquipamentosUncheckedCreateInput>
    /**
     * In case the Equipamentos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipamentosUpdateInput, EquipamentosUncheckedUpdateInput>
  }


  /**
   * Equipamentos delete
   */
  export type EquipamentosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamentos
     */
    select?: EquipamentosSelect<ExtArgs> | null
    /**
     * Filter which Equipamentos to delete.
     */
    where: EquipamentosWhereUniqueInput
  }


  /**
   * Equipamentos deleteMany
   */
  export type EquipamentosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipamentos to delete
     */
    where?: EquipamentosWhereInput
  }


  /**
   * Equipamentos without action
   */
  export type EquipamentosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipamentos
     */
    select?: EquipamentosSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EquipamentosScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    idBarra: 'idBarra',
    barraDe: 'barraDe',
    barraPara: 'barraPara',
    idLinha: 'idLinha'
  };

  export type EquipamentosScalarFieldEnum = (typeof EquipamentosScalarFieldEnum)[keyof typeof EquipamentosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type EquipamentosWhereInput = {
    AND?: EquipamentosWhereInput | EquipamentosWhereInput[]
    OR?: EquipamentosWhereInput[]
    NOT?: EquipamentosWhereInput | EquipamentosWhereInput[]
    id?: IntFilter<"Equipamentos"> | number
    tipo?: StringFilter<"Equipamentos"> | string
    idBarra?: IntFilter<"Equipamentos"> | number
    barraDe?: IntNullableFilter<"Equipamentos"> | number | null
    barraPara?: IntNullableFilter<"Equipamentos"> | number | null
    idLinha?: IntNullableFilter<"Equipamentos"> | number | null
  }

  export type EquipamentosOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    idBarra?: SortOrder
    barraDe?: SortOrderInput | SortOrder
    barraPara?: SortOrderInput | SortOrder
    idLinha?: SortOrderInput | SortOrder
  }

  export type EquipamentosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EquipamentosWhereInput | EquipamentosWhereInput[]
    OR?: EquipamentosWhereInput[]
    NOT?: EquipamentosWhereInput | EquipamentosWhereInput[]
    tipo?: StringFilter<"Equipamentos"> | string
    idBarra?: IntFilter<"Equipamentos"> | number
    barraDe?: IntNullableFilter<"Equipamentos"> | number | null
    barraPara?: IntNullableFilter<"Equipamentos"> | number | null
    idLinha?: IntNullableFilter<"Equipamentos"> | number | null
  }, "id">

  export type EquipamentosOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    idBarra?: SortOrder
    barraDe?: SortOrderInput | SortOrder
    barraPara?: SortOrderInput | SortOrder
    idLinha?: SortOrderInput | SortOrder
    _count?: EquipamentosCountOrderByAggregateInput
    _avg?: EquipamentosAvgOrderByAggregateInput
    _max?: EquipamentosMaxOrderByAggregateInput
    _min?: EquipamentosMinOrderByAggregateInput
    _sum?: EquipamentosSumOrderByAggregateInput
  }

  export type EquipamentosScalarWhereWithAggregatesInput = {
    AND?: EquipamentosScalarWhereWithAggregatesInput | EquipamentosScalarWhereWithAggregatesInput[]
    OR?: EquipamentosScalarWhereWithAggregatesInput[]
    NOT?: EquipamentosScalarWhereWithAggregatesInput | EquipamentosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Equipamentos"> | number
    tipo?: StringWithAggregatesFilter<"Equipamentos"> | string
    idBarra?: IntWithAggregatesFilter<"Equipamentos"> | number
    barraDe?: IntNullableWithAggregatesFilter<"Equipamentos"> | number | null
    barraPara?: IntNullableWithAggregatesFilter<"Equipamentos"> | number | null
    idLinha?: IntNullableWithAggregatesFilter<"Equipamentos"> | number | null
  }

  export type EquipamentosCreateInput = {
    tipo: string
    idBarra: number
    barraDe?: number | null
    barraPara?: number | null
    idLinha?: number | null
  }

  export type EquipamentosUncheckedCreateInput = {
    id?: number
    tipo: string
    idBarra: number
    barraDe?: number | null
    barraPara?: number | null
    idLinha?: number | null
  }

  export type EquipamentosUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    idBarra?: IntFieldUpdateOperationsInput | number
    barraDe?: NullableIntFieldUpdateOperationsInput | number | null
    barraPara?: NullableIntFieldUpdateOperationsInput | number | null
    idLinha?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EquipamentosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    idBarra?: IntFieldUpdateOperationsInput | number
    barraDe?: NullableIntFieldUpdateOperationsInput | number | null
    barraPara?: NullableIntFieldUpdateOperationsInput | number | null
    idLinha?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EquipamentosCreateManyInput = {
    id?: number
    tipo: string
    idBarra: number
    barraDe?: number | null
    barraPara?: number | null
    idLinha?: number | null
  }

  export type EquipamentosUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    idBarra?: IntFieldUpdateOperationsInput | number
    barraDe?: NullableIntFieldUpdateOperationsInput | number | null
    barraPara?: NullableIntFieldUpdateOperationsInput | number | null
    idLinha?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EquipamentosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    idBarra?: IntFieldUpdateOperationsInput | number
    barraDe?: NullableIntFieldUpdateOperationsInput | number | null
    barraPara?: NullableIntFieldUpdateOperationsInput | number | null
    idLinha?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EquipamentosCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    idBarra?: SortOrder
    barraDe?: SortOrder
    barraPara?: SortOrder
    idLinha?: SortOrder
  }

  export type EquipamentosAvgOrderByAggregateInput = {
    id?: SortOrder
    idBarra?: SortOrder
    barraDe?: SortOrder
    barraPara?: SortOrder
    idLinha?: SortOrder
  }

  export type EquipamentosMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    idBarra?: SortOrder
    barraDe?: SortOrder
    barraPara?: SortOrder
    idLinha?: SortOrder
  }

  export type EquipamentosMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    idBarra?: SortOrder
    barraDe?: SortOrder
    barraPara?: SortOrder
    idLinha?: SortOrder
  }

  export type EquipamentosSumOrderByAggregateInput = {
    id?: SortOrder
    idBarra?: SortOrder
    barraDe?: SortOrder
    barraPara?: SortOrder
    idLinha?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use EquipamentosDefaultArgs instead
     */
    export type EquipamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EquipamentosDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}