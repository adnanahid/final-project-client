import MenuItem from "./MenuItem";
import useMenu from "../CustomHook/useMenu";

const MenuCategory = ({ category }) => {
  const [menu] = useMenu();
  const filterData = menu.filter((item) => item.category === `${category}`);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-lg mx-auto gap-5 my-12">
        {filterData.map((menuItem) => (
          <MenuItem key={menuItem._id} item={menuItem}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
