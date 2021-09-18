import React from 'react';

const Categories = () => {
	const content = [
		{
			image: 'https://www.startech.com.bd/image/cache/catalog/graphics/Gigabyte/Gigabyte%20GV-N710D3-2GL-1-228x228.png',
			title: `Graphics Card`
		},
		{
			image: 'https://www.startech.com.bd/image/cache/catalog/server-accessories/ram/server-ram-ddr4-%20rdimm-228x228.jpg',
			title: `Ram`
		},
		{
			image: 'https://www.startech.com.bd/image/cache/catalog/motherboard/asrock/a320m-hdv-r4/a320m-hdv-r4-500x500.jpg',
			title: `Mother Board`
		},
	];

	return (
		<div className="">
			<div className="feature-heading mt-5">
				<h2 className="mb-4">Featured Categories</h2>
			</div>

			<ul id="autoWidth" className="row">
				{content.map((item, index) => (
					<div class="feature-box mx-5 py-2 rounded shadow card" style={{width: '18rem', height: '320px'}}>
                    <img className="" src={item.image} alt="..."/>
                    <h5 className="text-center pb-2">{item.title}</h5>
                  </div>
				))}
			</ul>
		</div>
	);
};

export default Categories;  