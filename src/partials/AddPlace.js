import { Formik, Field, Form } from "formik";

export const AddPlace = () => {
  if (!document.monetization) {
    return (
      <div class="z-10 shadow-lg rounded-2xl w-64 p-4 bg-white relative overflow-hidden m-2">
        <div class="w-4/6">
          <p class="text-gray-800 text-lg font-medium mb-2">
            Add your favorite place
          </p>
          <p class="text-gray-400 text-xs">Use Coil for enable this option.</p>
        </div>
      </div>
    );
  }
  return (
    <div class="z-10 shadow-lg rounded-2xl w-64 p-4 bg-white relative overflow-hidden m-2">
      <div>
        <p class="text-gray-800 text-center text-lg font-medium mb-2">
          Add your favorite place
        </p>
        <Formik
          initialValues={{
            coord1: "",
            coord2: "",
            name: "",
            url: "",
            decription: "lol",
          }}
          onSubmit={async (values) => {
            const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                coords: [values.coord1,values.coord2],
                name: values.name,
                url: values.url,
                description: "lol",
              }),
            };
            fetch(
              "https://0f16-2600-3c02-00-f03c-92ff-fe7e-fec.ngrok.io/destination/",
              requestOptions
            ).then((response) => response.json());
          }}
        >
          <Form>
            <label htmlFor="name" className="w-2 text-gray-700">
              Coordinates
            </label>
            <Field
              id="coord1"
              name="coord1"
              placeholder="51.05"
              type="number"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <Field
              id="coord2"
              name="coord2"
              placeholder="-0.09"
              type="number"
              className="mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />

            <label htmlFor="name" className="w-2 text-gray-700">
              Name of the place
            </label>
            <Field
              id="name"
              name="name"
              placeholder="Puebla"
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />

            <label htmlFor="url" className="w-2 text-gray-700">
              URL
            </label>
            <Field
              id="url"
              name="url"
              placeholder="youtube.com/..."
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <button
              type="submit"
              className=" mt-2 py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70 cursor-pointer rounded-lg "
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
