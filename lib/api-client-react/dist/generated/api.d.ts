import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { ErrorResponse, HealthStatus, Room, RoomInput, SuccessResponse } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateRoomUrl: () => string;
/**
 * Creates a new room and returns the room code and host peer ID slot
 * @summary Create a multiplayer room
 */
export declare const createRoom: (roomInput: RoomInput, options?: RequestInit) => Promise<Room>;
export declare const getCreateRoomMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createRoom>>, TError, {
        data: BodyType<RoomInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createRoom>>, TError, {
    data: BodyType<RoomInput>;
}, TContext>;
export type CreateRoomMutationResult = NonNullable<Awaited<ReturnType<typeof createRoom>>>;
export type CreateRoomMutationBody = BodyType<RoomInput>;
export type CreateRoomMutationError = ErrorType<ErrorResponse>;
/**
* @summary Create a multiplayer room
*/
export declare const useCreateRoom: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createRoom>>, TError, {
        data: BodyType<RoomInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createRoom>>, TError, {
    data: BodyType<RoomInput>;
}, TContext>;
export declare const getGetRoomUrl: (code: string) => string;
/**
 * Returns the host peer ID for a room so the joiner can connect
 * @summary Get room info
 */
export declare const getRoom: (code: string, options?: RequestInit) => Promise<Room>;
export declare const getGetRoomQueryKey: (code: string) => readonly [`/api/rooms/${string}`];
export declare const getGetRoomQueryOptions: <TData = Awaited<ReturnType<typeof getRoom>>, TError = ErrorType<ErrorResponse>>(code: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRoom>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getRoom>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetRoomQueryResult = NonNullable<Awaited<ReturnType<typeof getRoom>>>;
export type GetRoomQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get room info
 */
export declare function useGetRoom<TData = Awaited<ReturnType<typeof getRoom>>, TError = ErrorType<ErrorResponse>>(code: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRoom>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getDeleteRoomUrl: (code: string) => string;
/**
 * Removes a room when the game ends or host disconnects
 * @summary Delete a room
 */
export declare const deleteRoom: (code: string, options?: RequestInit) => Promise<SuccessResponse>;
export declare const getDeleteRoomMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteRoom>>, TError, {
        code: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteRoom>>, TError, {
    code: string;
}, TContext>;
export type DeleteRoomMutationResult = NonNullable<Awaited<ReturnType<typeof deleteRoom>>>;
export type DeleteRoomMutationError = ErrorType<ErrorResponse>;
/**
* @summary Delete a room
*/
export declare const useDeleteRoom: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteRoom>>, TError, {
        code: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteRoom>>, TError, {
    code: string;
}, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map