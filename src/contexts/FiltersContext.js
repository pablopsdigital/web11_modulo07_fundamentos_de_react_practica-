import React from 'react';

const FiltersContext = React.createContext();

export const FiltersContextProvider = FiltersContext.Provider;
export const FiltersContexttConsummer = FiltersContext.Consumer;

export default FiltersContext;
