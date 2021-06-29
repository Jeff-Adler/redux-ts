interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface SearchRepositoriesAction {
  type: 'search_repositories';
}

interface SearchRepositoriesSuccessAction {
  type: 'search_repositories_success';
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: 'search_repositories_error';
  payload: string;
}

const reducer = (
  state: RepositoriesState,
  action: SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction
): RepositoriesState => {
  // action.type is read from the interfaces associated with action argument. So, it knows what payload to expect for every possible type
  switch (action.type) {
    // case statements function as type guards: if a case evaluates to T, the associated action is fully determined
    case 'search_repositories':
      return {
        loading: true,
        error: null,
        data: [],
      };
    case 'search_repositories_success':
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case 'search_repositories_error':
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
