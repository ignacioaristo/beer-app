import { AppDispatch } from "@/app/store";
import { fetchProducts } from "@/redux/modules/products/actions/fetchProducts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <h1>New Taste</h1>
      <p>Discover new flavors and culinary experiences.</p>
    </div>
  );
};
