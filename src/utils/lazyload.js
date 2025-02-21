import { lazy } from 'react';

const lazyModules = {
  Projects: () => import('../components/sections/Projects'),
  Skills: () => import('../components/sections/Skills'),
  Contact: () => import('../components/sections/Contact'),
};

export const lazyLoad = (componentName) => {
  if (!lazyModules[componentName]) {
    throw new Error(`El módulo "${componentName}" no está definido en lazyModules.`);
  }

  return lazy(() => lazyModules[componentName]().then(module => ({
    default: module.default || module[Object.keys(module)[0]]
  })));
};
