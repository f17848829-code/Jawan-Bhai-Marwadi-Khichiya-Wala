import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  MessageSquare, 
  Phone, 
  Check, 
  Scale, 
  Truck, 
  ShieldCheck, 
  ChefHat, 
  Flame,
  ChevronRight
} from 'lucide-react';
import { BUSINESS_CONFIG, PackagedProduct } from '../config/business';
import { ProductImageGallery } from '../components/ProductImageGallery';

interface ProductDetailPageProps {
  onOpenEnquiry: (params?: any) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onOpenEnquiry }) => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedKg, setSelectedKg] = useState('2');

  // Find product by slug
  const product = BUSINESS_CONFIG.packagedProducts.find((p) => p.slug === slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  // Related products
  const otherProducts = BUSINESS_CONFIG.packagedProducts.filter((p) => p.slug !== slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Breadcrumb / Back Link */}
      <div className="flex items-center gap-2 text-xs font-medium text-stone-500">
        <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-stone-900 transition-colors">Packaged Khichiya</Link>
        <span>/</span>
        <span className="text-stone-900 font-semibold">{product.name}</span>
      </div>

      {/* Main PDP Grid: 2-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Image Gallery & Recipe Craft */}
        <div className="lg:col-span-6 space-y-6">
          {/* Multi-image Appetizing Gallery with Lightbox */}
          <ProductImageGallery
            gallery={product.gallery}
            productName={product.name}
            pricePerKg={product.pricePerKg}
          />

          {/* Key Ingredients */}
          <div className="bg-[#FFFDF9] rounded-2xl border border-stone-200 p-6 space-y-3">
            <h3 className="font-heading text-sm uppercase tracking-wider font-bold text-stone-900 flex items-center gap-2">
              <ChefHat className="w-4 h-4 text-[#881337]" />
              <span>Authentic Ingredients</span>
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {product.ingredients.map((ing, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1.5 bg-stone-100 rounded-lg text-stone-700 font-medium"
                >
                  {ing}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-stone-500 pt-2 border-t border-stone-100">
              * Prepared following traditional Marwari family recipes. 100% vegetarian, sun-dried.
            </p>
          </div>
        </div>

        {/* Right Column: Contiguous Purchase / Enquiry Module */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-[#FFFDF9] rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                <span>Handcrafted in Mumbai</span>
                <span aria-hidden="true">·</span>
                <span>Near Kaal Bhairav Mandir</span>
              </div>
              <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-stone-900">
                {product.name}
              </h1>
              {product.marwadiName && (
                <p className="text-sm text-[#881337] font-semibold font-serif mt-1">
                  {product.marwadiName}
                </p>
              )}
            </div>

            {/* Price block */}
            <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-xl flex items-baseline justify-between">
              <div>
                <span className="text-xs text-stone-600 block">Retail Rate (Per Kilogram)</span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-3xl font-bold font-sans-clean text-stone-900 tabular-nums">
                    ₹{product.pricePerKg}
                  </span>
                  <span className="text-xs text-stone-600">/ kg</span>
                </div>
              </div>
              <span className="text-xs font-semibold text-[#881337] bg-white px-2.5 py-1 rounded-md border border-amber-200">
                Wholesale quotes on request
              </span>
            </div>

            {/* Product description */}
            <div className="text-xs sm:text-sm text-stone-700 leading-relaxed space-y-3">
              <p>{product.longDescription}</p>
            </div>

            {/* Recommended preparation */}
            <div className="space-y-2 pt-2 border-t border-stone-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-700 block">
                Recommended Ways to Serve
              </span>
              <ul className="space-y-1.5 text-xs text-stone-600">
                {product.bestUsedFor.map((use, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity Selector for WhatsApp message */}
            <div className="pt-2 border-t border-stone-100 space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 block">
                Select Enquiry Quantity (in Kilograms)
              </label>
              <div className="flex gap-2">
                {['1', '2', '5', '10', '25+'].map((kg) => (
                  <button
                    key={kg}
                    type="button"
                    onClick={() => setSelectedKg(kg)}
                    className={`flex-1 py-2 text-xs font-semibold rounded-xl border transition-all ${
                      selectedKg === kg
                        ? 'bg-[#881337] text-white border-[#881337] shadow-xs'
                        : 'bg-white text-stone-700 border-stone-300 hover:border-[#881337]'
                    }`}
                  >
                    {kg === '25+' ? '25kg+' : `${kg} kg`}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() =>
                  onOpenEnquiry({
                    type: selectedKg.includes('25') ? 'wholesale' : 'packaged',
                    productName: product.name,
                    quantityKg: selectedKg,
                  })
                }
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-semibold text-sm transition-all shadow-md active:scale-98"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire & Order on WhatsApp ({selectedKg} kg)</span>
              </button>

              <button
                onClick={() =>
                  onOpenEnquiry({
                    type: 'wholesale',
                    productName: product.name,
                    quantityKg: '50',
                    notes: `Wholesale pricing inquiry for ${product.name}`,
                  })
                }
                className="w-full flex items-center justify-center gap-2 py-3 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Request Wholesale / Bulk Quote</span>
              </button>
            </div>

            {/* Delivery & Pickup Policy */}
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 space-y-1.5 leading-relaxed">
              <div className="flex items-center gap-2 font-semibold text-stone-800">
                <Truck className="w-4 h-4 text-[#881337]" />
                <span>Delivery & Store Pickup</span>
              </div>
              <p>
                Packaged orders may be eligible for home delivery across Mumbai or counter collection at our shop near Kaal Bhairav Mandir, Mumbadevi. Minimum order requirements and delivery charges are confirmed via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Explore Other Packaged Varieties */}
      <div className="space-y-6 pt-6 border-t border-stone-200">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-xl font-bold text-stone-900">
            Other Packaged Khichiya Varieties
          </h2>
          <Link to="/products" className="text-xs font-semibold text-[#881337] hover:underline">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProducts.map((other) => (
            <div
              key={other.id}
              className="bg-[#FFFDF9] rounded-2xl border border-stone-200 p-5 flex items-center gap-5 hover:border-[#881337]/30 transition-colors"
            >
              <img
                src={other.image}
                alt={other.name}
                referrerPolicy="no-referrer"
                className="w-24 h-24 object-cover rounded-xl shrink-0"
              />
              <div className="flex-1">
                <span className="text-xs text-stone-500 font-medium">₹{other.pricePerKg} / kg</span>
                <h3 className="font-heading font-bold text-stone-900 text-base mt-0.5">
                  {other.name}
                </h3>
                <p className="text-xs text-stone-600 line-clamp-1 mt-1">{other.description}</p>
                <Link
                  to={`/products/${other.slug}`}
                  className="text-xs font-semibold text-[#881337] hover:underline mt-2 inline-flex items-center gap-1"
                >
                  <span>Explore Variety</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
