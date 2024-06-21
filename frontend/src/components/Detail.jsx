import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Banner0 from '../shared/Banner0';
import productsData from '../DataJson/product.json';
import ProductImage from '../shared/ProductImage';
import ProductDescription from '../shared/ProductDescription';
import ProductSpecifications from '../shared/ProductSpecifications';
import ReviewSection from '../shared/ReviewSection';
import RelatedProduct from '../shared/RelatedProduct';
import Copyright from '../shared/Copyright';
import { UserContext } from '../context/UserContext';

const Detail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState('');
    const [startIndex, setStartIndex] = useState(0);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedStorage, setSelectedStorage] = useState('');
    const [selectedProcessor, setSelectedProcessor] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);

    const { user } = useContext(UserContext);

    useEffect(() => {
        const foundProduct = productsData.products.find(product => product.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
            setSelectedImage(foundProduct.image[0]);
            setStartIndex(0);
            setTotalPrice(foundProduct.price);

            // Apply discount logic based on brand and category
            if (foundProduct.brand.toLowerCase() === 'apple' && foundProduct.category.toLowerCase() === 'audio') {
                const discountedPrice = foundProduct.price * 0.9;
                setTotalPrice(discountedPrice);
            }
        } else {
            setProduct(null);
        }
    }, [id]);

    const handleClickImage = (img) => {
        setSelectedImage(img);
        const newIndex = product.image.indexOf(img);
        if (newIndex !== startIndex) {
            const newImagesToShow = [...product.image];
            const movedImage = newImagesToShow.splice(newIndex, 1);
            newImagesToShow.splice(0, 0, movedImage[0]);
            setStartIndex(0);
            setProduct({ ...product, image: newImagesToShow });
        }
    };

    const handleColorClick = (colorName) => {
        setSelectedColor(colorName);
    };

    const handleStorageClick = (storage) => {
        if (storage === selectedStorage) {
            return;
        }
        
        // Update totalPrice based on selected storage price
        const prevStorage = product.specifications.storage.items.find(item => item.name === selectedStorage);
        const newStorage = product.specifications.storage.items.find(item => item.name === storage);
        
        let updatedPrice = totalPrice;
        
        if (prevStorage) {
            updatedPrice -= prevStorage.price;
        }
        
        if (newStorage) {
            updatedPrice += newStorage.price;
        }

        setSelectedStorage(storage);
        setTotalPrice(updatedPrice);
    };

    const handleProcessorClick = (processorName) => {
        if (processorName === selectedProcessor) {
            return;
        }
        
        // Update totalPrice based on selected processor price
        const prevProcessor = product.specifications.processor.items.find(item => item.name === selectedProcessor);
        const newProcessor = product.specifications.processor.items.find(item => item.name === processorName);
        
        let updatedPrice = totalPrice;
        
        if (prevProcessor) {
            updatedPrice -= prevProcessor.price;
        }
        
        if (newProcessor) {
            updatedPrice += newProcessor.price;
        }

        setSelectedProcessor(processorName);
        setTotalPrice(updatedPrice);
    };

    const imagesToShow = product ? product.image.slice(startIndex, startIndex + 4) : [];

    if (!product) {
        return <div>Product not found</div>;
    }

    // Console log to check if user is logged in
    console.log('Nama User Login:', user ? user.id : 'Belum login');
    console.log('Nama User email:', user ? user.email : 'Belum login');
    console.log('Nama User phone:', user ? user.phone : 'Belum login');

    return (
        <div>
            <Navbar />
            <Banner0 title="Product" breadcrumbs={['Home', 'Product', product.name]} />

            <div className="grid grid-cols-2 justify-center ml-24">
                <ProductImage
                    selectedImage={selectedImage}
                    imagesToShow={imagesToShow}
                    handleClickImage={handleClickImage}
                />

                <ProductDescription
                    product={product}
                    totalPrice={totalPrice}
                    selectedColor={selectedColor}
                    selectedStorage={selectedStorage}
                    selectedProcessor={selectedProcessor}
                    handleColorClick={handleColorClick}
                    handleStorageClick={handleStorageClick}
                    handleProcessorClick={handleProcessorClick}
                    user={user}
                    
                />
            </div>

            <div className='grid grid-cols-2 ml-24'>
                <ProductSpecifications product={product} />
                <ReviewSection productId={product.id} />
            </div>

            <RelatedProduct productsData={productsData} brand={product.brand} productId={product.id} category={product.category} />

            <Copyright />
        </div>
    );
};

export default Detail;
