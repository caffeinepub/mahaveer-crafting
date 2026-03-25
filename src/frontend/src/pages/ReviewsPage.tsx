const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Delhi",
    rating: 5,
    date: "March 2026",
    message:
      "Bahut achha kaam kiya! Humne apni company ke liye 50 t-shirts order kiye the aur quality ekdum top class thi. DTF printing ka color bilkul vivid aur sharp tha. Definitely recommend karunga.",
    reply:
      "Dhanyawad Rahul ji! Aapka order deliver karke humein bahut khushi hui. Aage bhi seva karne ka mauka dena.",
  },
  {
    id: 2,
    name: "Priya Verma",
    location: "Noida",
    rating: 5,
    date: "February 2026",
    message:
      "Our school sports day uniforms came out absolutely beautiful. The prints were vibrant and didn't fade even after washing multiple times. Very professional service and on-time delivery.",
    reply:
      "Thank you Priya ji! We are glad the uniforms were a hit at your school event. Looking forward to serving you again!",
  },
  {
    id: 3,
    name: "Amit Gupta",
    location: "Gurugram",
    rating: 5,
    date: "February 2026",
    message:
      "Mene apne startup ke liye custom hoodies order ki thi. Design exactly match tha jo maine bheja tha. Price bhi reasonable tha starting from \u20b9149. Very happy with the service!",
    reply: null,
  },
  {
    id: 4,
    name: "Sunita Kaur",
    location: "Punjab",
    rating: 4,
    date: "January 2026",
    message:
      "Good quality printing. We ordered team jerseys for our cricket club and everyone loved them. Delivery was a bit delayed but the quality made up for it. Will order again.",
    reply:
      "Thank you Sunita ji for your feedback! We apologize for the slight delay and have improved our delivery timelines. Hope to serve you faster next time!",
  },
  {
    id: 5,
    name: "Deepak Yadav",
    location: "Delhi",
    rating: 5,
    date: "January 2026",
    message:
      "Excellent work by Mahaveer Crafting team! Corporate event ke liye 100 t-shirts banwaye the. Sabka design alag tha aur sab perfect nikle. Very professional aur helpful staff.",
    reply: null,
  },
  {
    id: 6,
    name: "Kavita Mehta",
    location: "Faridabad",
    rating: 5,
    date: "December 2025",
    message:
      "I was really impressed by the quality of DTF printing. Colors are so bright and the texture is smooth. Ordered caps with custom logo and they look super premium. Highly recommended!",
    reply:
      "Thank you so much Kavita ji! Custom cap orders are our specialty. Do visit us again for your next bulk order!",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          aria-hidden="true"
          className={`w-5 h-5 ${
            star <= rating ? "text-yellow-400" : "text-gray-200"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewsPage() {
  const avg = (
    reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Customer Reviews
          </h1>
          <p className="text-gray-500 mb-4">
            What our clients say about Mahaveer Crafting
          </p>
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border">
            <span className="text-3xl font-bold text-primary">{avg}</span>
            <div>
              <StarRating rating={5} />
              <p className="text-xs text-gray-500 mt-0.5">
                {reviews.length} reviews
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-xs text-gray-400">
                      {review.location} &bull; {review.date}
                    </p>
                  </div>
                </div>
                <StarRating rating={review.rating} />
              </div>

              <p className="text-gray-700 leading-relaxed">{review.message}</p>

              {review.reply && (
                <div className="mt-4 pl-4 border-l-2 border-primary/40 bg-primary/5 rounded-r-lg py-3 pr-3">
                  <p className="text-xs font-semibold text-primary mb-1">
                    Response from Mahaveer Crafting
                  </p>
                  <p className="text-sm text-gray-600">{review.reply}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 mb-4">
            Happy with our work? Contact us on WhatsApp to place your order!
          </p>
          <a
            href="https://wa.me/919311246415?text=Hello%20Mahaveer%20Crafting!%20I%20would%20like%20to%20enquire%20about%20your%20DTF%20printing%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="currentColor"
              role="img"
              aria-label="WhatsApp"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Order on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
