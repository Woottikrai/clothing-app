import React from "react";
import { useNavigate } from "react-router-dom";
import { initParams } from "../../config/axios/axios-interface";
import { productApi, getProductAll } from "../../service/api/product/product.axios";
import { useForm } from "antd/es/form/Form";
import { TablePaginationConfig } from "antd";
import ProductCard from "./card";
import { IProduct } from "../../interface/IProduct";
type Props = {};
export default function ListProduct({ }: Props) {


    const [selectTabs, setSelectTabs] = React.useState<String>("1");
    const navigate = useNavigate();
    const [params, setParams] = React.useState<any>(initParams);
    const { data: getProductAll, } = productApi.usegetProductAll(params);

    console.log(getProductAll?.data)


    const handleOnTabChange = (activeKey: string) => {
        setSelectTabs(activeKey);
    };

    const handlePagination = (pagenition: TablePaginationConfig) => {
        setParams({
            page: pagenition.current,
            limit: pagenition.pageSize,
        });
    };

    return (
        <div>

            <div className="card-container">
                {getProductAll?.data.map((product: IProduct) => (
                    <ProductCard key={product.id} img={product.img}
                        price={product.price}
                        size={product.size}
                        producttype={product.producttype}
                        color={product.color}
                        suitability={product.suitability}
                    />
                ))}
            </div>
        </div>
    );

}



