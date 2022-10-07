import React from "react";
import "./styles.css";
import "./ArcGIS.css";

const Map = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "80vw", textAlign: "left" }}>
        <br />
        <h2 style={{ textAlign: "center" }}>
          Our Maps focus on Food, Education, and Green Infrastructure Deserts
        </h2>

        <p>
          Living in a food desert can be extremly challenging without reliable
          transportation. We can begin to identify that there is a large portion
          of Kansas residents that live too far to walk to grocery stores.
          Having access to essential nutrition, is critical for a healthy diet
          and general well-being. We created this Map to help Kansans identify
          better homes to purchase or their next rental.
        </p>

        <br />
        <h3>Here we look at the Food Desert in Manhattan, Kansas.</h3>
        <div className="iframe-wrapper Shadow">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            title="Food Desert - Manhattan Kansas"
            src="//kstate.maps.arcgis.com/apps/Embed/index.html?webmap=43d101d073bd44f198b50d23a7f85e85&extent=-96.7132,39.1294,-96.5517,39.24&home=true&zoom=true&previewImage=true&scale=true&search=true&searchextent=true&details=true&legendlayers=true&active_panel=details&basemap_gallery=true&disable_scroll=true&theme=light"
          ></iframe>
        </div>
        <br />
        <a
          href="https://kstate.maps.arcgis.com/apps/Embed/index.html?webmap=43d101d073bd44f198b50d23a7f85e85&extent=-96.7132,39.1294,-96.5517,39.24&home=true&zoom=true&scale=true&search=true&searchextent=true&details=true&legendlayers=true&active_panel=details&basemap_gallery=true&disable_scroll=true&theme=light"
          style={{ color: "#0000FF" }}
          target="_blank"
        >
          View larger map on ArcGIS.com
        </a>
        <br />
        <br />

        <h3>Here we look at the Food Desert in Kansas City.</h3>

        <div className="iframe-wrapper Shadow">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            title="Kansas City Grocery Stores and Food Desert"
            src="//kstate.maps.arcgis.com/apps/Embed/index.html?webmap=dc96bbe339c64b0cb11a7fca9c1bcde1&extent=-95.6005,38.6378,-93.5721,39.5237&home=true&zoom=true&previewImage=true&scale=true&search=true&searchextent=true&details=true&legend=true&active_panel=details&basemap_gallery=true&disable_scroll=false&theme=light"
          ></iframe>
        </div>
        <br />

        <a
          href="//kstate.maps.arcgis.com/apps/Embed/index.html?webmap=dc96bbe339c64b0cb11a7fca9c1bcde1&extent=-95.6005,38.6378,-93.5721,39.5237&home=true&zoom=true&scale=true&search=true&searchextent=true&details=true&legend=true&active_panel=details&basemap_gallery=true&disable_scroll=false&theme=light"
          style={{ color: "#0000FF" }}
          target="_blank"
        >
          View larger map on ArcGIS.com
        </a>

        <br />
        <br />
        <div>
          <p>
            You can review more maps on{" "}
            <a href="https://www.arcgis.com/index.html">ArcGIS.com</a> or visit
            our{" "}
            <a href="https://kstate.maps.arcgis.com/home/search.html?q=owner%3A%22DBE45pZvY7Gmm4Vkbv9YGyMqIpk__kstate%22&t=content&restrict=false">
              portfollio.
            </a>
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Map;
