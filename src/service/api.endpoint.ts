import projectConfig from "../config/project.config";

export const endpoints = {
  product: {
    getSizeAll: `${projectConfig.baseURL}/size-all`,
    getSuitabilityAll: `${projectConfig.baseURL}/suitability-all`,
    getProducttypeAll: `${projectConfig.baseURL}/producttype-all`,
    getColorAll: `${projectConfig.baseURL}/color-all`,
    getProducrtAll: `${projectConfig.baseURL}/find-all`,
    addProduct: `${projectConfig.baseURL}/add-product`,
    getProductAll: `${projectConfig.baseURL}/find-all`,
  },

  user: {
    login: `${projectConfig.baseURL}/authentication/siginin`,
    register: `${projectConfig.baseURL}/user/register`,
    updateUser: `${projectConfig.baseURL}/user/update:id`,
    updatePssword: `${projectConfig.baseURL}/user/update-password`,
  },
};

export default endpoints;
