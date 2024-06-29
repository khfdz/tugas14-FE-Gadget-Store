import React, { createContext, useState, useEffect } from 'react';

export const ApiContext = createContext();

export const ApiProvider = (props) => {
  const [pagesData, setPagesData] = useState([]);
  const [apiData, setApiData] = useState(null);
  const [configData, setConfigData] = useState(null);
  const [apiProductsData, setApiProductsData] = useState(null); 
  const [productsData, setProductsData] = useState([]);
  const [detailProductData, setDetailProductData] = useState(null);
  const [variantProductData, setVariantProductData] = useState(null);
  const [apiBlog, setApiBlog] = useState([]);
  const [blogData, setBlogData] = useState(null);
  const [apiArticle, setApiArticle] = useState(null);
  const [slug, setSlug] = useState(null);
  const [apiCategories, setApiCategories] = useState([]);
  const [categoriesData, setCategoriesData] = useState(null);

  const [page, setPage] = useState(1);
  const [searchName, setSearchName] = useState('');
  const [sorting, setSorting] = useState('');

  useEffect(() => {
    const fetchApiWebInfo = async () => {
      try {
        const response = await fetch('https://sistemtoko.com/public/hijja/website');
        if (!response.ok) {
          throw new Error('Failed to fetch website data');
        }
        const data = await response.json();
        setApiData(data);
        if (data.status === 0) {
          setPagesData(data.data.pages);
          setConfigData(data.data.config);
        } else {
          throw new Error('Failed to fetch pages data');
        }
      } catch (error) {
        console.error('Error fetching website data:', error);
      }
    };

    fetchApiWebInfo();
  }, []);

  useEffect(() => {
    const fetchApiProducts = async () => {
      try {
        const response = await fetch(`https://sistemtoko.com/public/hijja/product?page=${page}&sorting=${sorting}&categories=all&search_name=${searchName}`);
        if (!response.ok) {
          throw new Error('Failed to fetch products data');
        }
        const data = await response.json();

        if (page === 1) {
          setProductsData(data.aaData); 
        } else {
          setProductsData(prevProducts => [...prevProducts, ...data.aaData]); 
        }
        
        setApiProductsData(data); 
      } catch (error) {
        console.error('Error fetching products data:', error);
      }
    };

    fetchApiProducts();
  }, [page, sorting, searchName]);

  useEffect(() => {
    const fetchDetailProduct = async (productId) => {
      try {
        const response = await fetch(`https://sistemtoko.com/public/hijja/single/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch detail product data');
        }
        const data = await response.json();
        setDetailProductData(data);
      } catch (error) {
        console.error('Error fetching detail product data:', error);
      }
    };

    if (props.productId) {
      fetchDetailProduct(props.productId);
    }

  }, [props.productId]);

  useEffect(() => {
    const fetchVariantProduct = async (productId) => {
      try {
        const response = await fetch(`https://sistemtoko.com/public/hijja/varian/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch variant product data');
        }
        const data = await response.json();
        setVariantProductData(data);
      } catch (error) {
        console.error('Error fetching variant product data:', error);
      }
    };

    if (props.productId) {
      fetchVariantProduct(props.productId);
    }

  }, [props.productId]);

  useEffect(() => {
    const fetchApiBlog = async () => {
      try {
        const response = await fetch('https://sistemtoko.com/public/hijja/blog');
        if (!response.ok) {
          throw new Error('Failed to fetch blog data');
        }
        const data = await response.json();
        setApiBlog(data);

        if (data.aaData) {
          setBlogData(data.aaData);
        }
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchApiBlog();
  }, []);

  useEffect(() => {
    const fetchApiArticle = async (slug) => {
      try {
        if (slug) {
          const response = await fetch(`https://sistemtoko.com/public/hijja/article/${slug}`);
          if (!response.ok) {
            throw new Error('Failed to fetch article data');
          }
          const data = await response.json();
          setApiArticle(data);
        }
      } catch (error) {
        console.error('Error fetching article data:', error);
      }
    };

    fetchApiArticle(slug);

  }, [slug]);

  useEffect(() => {
    const fetchApiCategories = async () => {
      try {
        const response = await fetch('https://sistemtoko.com/public/hijja/cat');
        if (!response.ok) {
          throw new Error('Failed to fetch categories data');
        }
        const data = await response.json();
        setApiCategories(data);
        if (data.aaData) {
          setCategoriesData(data.aaData);
        }
      } catch (error) {
        console.error('Error fetching categories data:', error);
      }
    };

    fetchApiCategories();
  }, []);

  useEffect(() => {
    console.log('API Data:', apiData);
  }, [apiData]);

  useEffect(() => {
    console.log('Pages Data:', pagesData);
  }, [pagesData]);

  useEffect(() => {
    console.log('Config Data:', configData);
  }, [configData]);

  useEffect(() => {
    console.log('API Products Data:', apiProductsData);
  }, [apiProductsData]);

  useEffect(() => {
    console.log('Products Data:', productsData);
  }, [productsData]);

  useEffect(() => {
    console.log('Detail Product Data:', detailProductData);
  }, [detailProductData]);

  useEffect(() => {
    console.log('Variant Product Data:', variantProductData);
  }, [variantProductData]);

  useEffect(() => {
    console.log('API Blog:', apiBlog);
  }, [apiBlog]);

  useEffect(() => {
    console.log('Blog Data:', blogData);
  }, [blogData]);

  useEffect(() => {
    console.log('API Article:', apiArticle);
  }, [apiArticle]);

  useEffect(() => {
    console.log("Slug:", slug);
  }, [slug]);

  useEffect(() => {
    console.log('API Categories:', apiCategories);
  }, [apiCategories]);

  useEffect(() => {
    console.log('Categories Data:', categoriesData);
  }, [categoriesData]);

  useEffect(() => {
    console.log('Search Name:', searchName);
  }, [searchName]);

  useEffect(() => {
    setSlug(props.slug);
  }, [props.slug]);

  if (!apiData || !productsData.length) { 
    return <div>Loading...</div>;
  }

  return (
    <ApiContext.Provider value={{
      apiData,
      pagesData,
      configData,
      apiProductsData,
      productsData,
      detailProductData,
      variantProductData,
      apiBlog,
      blogData,
      apiArticle,
      setSlug,
      slug,
      categoriesData,
      apiCategories,
      searchName,
      setSearchName,
      sorting,
      setSorting,
      page,
      setPage
    }}>
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
