interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

enum ActionType {
  SEARCH_REPOSITORIES = 'search_repositories',
  SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
  SEARCH_REPOSITORIES_ERROR = 'search_repositories_error',
}

const reducer = (state: RepositoriesState, action: Action): RepositoriesState => {
  // action.type is read from the interfaces associated with action argument. So, it knows what payload to expect for every possible type
  switch (action.type) {
    // case statements function as type guards: if a case evaluates to T, the associated action is fully determined
    case ActionType.SEARCH_REPOSITORIES:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return {
        loading: false,
        // TS knows this should throw error, cause type of action.payload for this action doesn't match IRepositoriesState
        // error: action.payload,
        error: null,
        data: action.payload,
      };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
