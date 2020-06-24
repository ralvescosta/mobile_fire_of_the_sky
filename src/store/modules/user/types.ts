/**
 * Action Types
 */
export enum UserTypes {
  FETCH_GIT_USER_REQUEST = '@gitUser/FETCH_GIT_USER_REQUEST',
  FETCH_GIT_USER_SUCCESS = '@gitUser/FETCH_GIT_USER_SUCCESS',
  FETCH_GIT_USER_FAILURE = '@gitUser/FETCH_GIT_USER_FAILURE'
}

/**
 * Data Types
 */

export interface User {
  id?: number,
  name?: string,
  login?: string,
  avatar_url?: string,
}

export interface UserRequestInput {
  userName: string
}


/**
 * State Type
 */
export interface UserState {
  readonly user: User,
  readonly loading: boolean,
  readonly error: boolean,
}
