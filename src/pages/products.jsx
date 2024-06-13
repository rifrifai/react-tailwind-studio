export default function ProductsPage() {
  return (
    <>
      <div className="flex justify-center py-5">
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
          <a href="#">
            <img
              src="/public/images/shoes-1.jpg"
              alt="shoes-1"
              className="p-8 rounded-t-lg"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-white">
                New Nike Air 1
              </h5>
              <p className="text-s text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
                quae ad voluptatem maiores nobis esse, dolore animi rerum
                temporibus excepturi. Ipsa accusamus harum facilis quos ex
                consequatur sequi quasi ad?
              </p>
            </a>
          </div>
          <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">Rp. 1.000.000</span>
            <button className="bg-blue-600 rounded p-2 text-white font-medium">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
