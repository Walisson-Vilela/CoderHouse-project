interface IProps {
  description: string;
}

const ProductDescription = ({ description }: IProps) => {
  return (
    <section className="col-span-3 relative min-h-24 border-4 border-white rounded-md items-center p-5 bg-gradient-to-t from-blue-950/60 to-blue-300/40 shadow-md">
      Image adjustments{description}
    </section>
  );
};

export default ProductDescription;