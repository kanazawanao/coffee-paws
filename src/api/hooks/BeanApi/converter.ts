import { CreateBean as ApiBeanRequest, Bean as ApiBean } from 'api/clients/api';
import Bean from 'models/Bean';

export function fromApiBean(apiBean: ApiBean): Bean {
  return {
    id: apiBean.id,
    storeId: apiBean.storeId,
    productionArea: apiBean.productionArea,
    plantationName: apiBean.plantationName,
    kind: apiBean.kind,
    roastLevel: apiBean.roastLevel,
    price: apiBean.price,
  };
}

export function toApiBean(bean: Bean): ApiBeanRequest {
  return {
    productionArea: bean.productionArea,
    plantationName: bean.plantationName,
    kind: bean.kind,
    roastLevel: bean.roastLevel,
    price: bean.price,
  };
}
