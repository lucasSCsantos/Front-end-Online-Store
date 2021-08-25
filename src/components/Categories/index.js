import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import FastfoodOutlinedIcon from '@material-ui/icons/FastfoodOutlined';
import PetsOutlinedIcon from '@material-ui/icons/PetsOutlined';
import AlbumOutlinedIcon from '@material-ui/icons/AlbumOutlined';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import ChildFriendlyOutlinedIcon from '@material-ui/icons/ChildFriendlyOutlined';
import SpaOutlinedIcon from '@material-ui/icons/SpaOutlined';
import DirectionsBikeOutlinedIcon from '@material-ui/icons/DirectionsBikeOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import MotorcycleOutlinedIcon from '@material-ui/icons/MotorcycleOutlined';
import HouseOutlinedIcon from '@material-ui/icons/HouseOutlined';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import ApartmentOutlinedIcon from '@material-ui/icons/ApartmentOutlined';
import KitchenIcon from '@material-ui/icons/Kitchen';
import DevicesOtherOutlinedIcon from '@material-ui/icons/DevicesOtherOutlined';
import SportsSoccerOutlinedIcon from '@material-ui/icons/SportsSoccerOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import VideogameAssetOutlinedIcon from '@material-ui/icons/VideogameAssetOutlined';
import HomeWorkOutlinedIcon from '@material-ui/icons/HomeWorkOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import ConfirmationNumberOutlinedIcon from '@material-ui/icons/ConfirmationNumberOutlined';
import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';
import RoomServiceOutlinedIcon from '@material-ui/icons/RoomServiceOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { Link } from 'react-router-dom';
import { Categories, Category, Container } from './styled';
import { getCategories } from '../../services/api';
import { category_action, fetchProducts } from '../../action';

export default function Page() {
  const icons = [
    { icon: <DriveEtaOutlinedIcon /> },
    { icon: <LocalShippingOutlinedIcon /> },
    { icon: <FastfoodOutlinedIcon /> },
    { icon: <PetsOutlinedIcon /> },
    { icon: <AlbumOutlinedIcon /> },
    { icon: <BrushOutlinedIcon /> },
    { icon: <ChildFriendlyOutlinedIcon /> },
    { icon: <SpaOutlinedIcon /> },
    { icon: <DirectionsBikeOutlinedIcon /> },
    { icon: <LocalMallOutlinedIcon /> },
    { icon: <CameraAltOutlinedIcon /> },
    { icon: <MotorcycleOutlinedIcon /> },
    { icon: <HouseOutlinedIcon /> },
    { icon: <SmartphoneIcon /> },
    { icon: <ApartmentOutlinedIcon /> },
    { icon: <KitchenIcon /> },
    { icon: <DevicesOtherOutlinedIcon /> },
    { icon: <SportsSoccerOutlinedIcon /> },
    { icon: <BuildOutlinedIcon /> },
    { icon: <CardGiftcardOutlinedIcon /> },
    { icon: <VideogameAssetOutlinedIcon /> },
    { icon: <HomeWorkOutlinedIcon /> },
    { icon: <BusinessOutlinedIcon /> },
    { icon: <ComputerOutlinedIcon /> },
    { icon: <ConfirmationNumberOutlinedIcon /> },
    { icon: <MusicNoteOutlinedIcon /> },
    { icon: <AccessTimeOutlinedIcon /> },
    { icon: <MenuBookOutlinedIcon /> },
    { icon: <OndemandVideoOutlinedIcon /> },
    { icon: <LocalHospitalOutlinedIcon /> },
    { icon: <RoomServiceOutlinedIcon /> },
    { icon: <MoreHorizOutlinedIcon /> },
  ];

  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesList = async () => {
      const categoriesList = await getCategories();
      setCategories(categoriesList);
    };

    getCategoriesList();
  }, []);

  const getProductByCategory = async (categoryId) => {
    dispatch(fetchProducts(categoryId, 'QUERY'));
  };

  const onNextClick = ({target}) => {
    const slider = target.nextSibling;
    const imgWidth = slider.offsetWidth;
    slider.scrollLeft +=  imgWidth;
  }

  const onPreviousClick = ({target}) => {
    const slider = target.nextSibling.nextSibling;
    const imgWidth = slider.offsetWidth;
    slider.scrollLeft -= imgWidth;
  }

  return (
    <Container>
        <span
          className="previous"
          onClick={(e) => onPreviousClick(e)}
        > {'<'} </span>
        <span
          className="next"
          onClick={(e) => onNextClick(e)}
        > {'>'} </span>
      <Categories>
        {categories.map((category, index) => (
          <Link
            to={ `/category/${category.name.replace(/\s/g, '-').toLowerCase()}` }
            onClick={ () => dispatch(category_action(category.name)) }
            key={ index }
          >
            <Category onClick={ () => getProductByCategory(category.id) } aria-hidden="true">
              <p className="cTitle">{category.name}</p>
              {icons[index].icon}
            </Category>
          </Link>
        ))}
      </Categories>
    </Container>
  );
}
