import { Helmet } from 'react-helmet-async';

function SEO({ 
  title = "TP3 - Imobiliária, Engenharia e Remodelações em Viseu",
  description = "TP3 em Viseu, Portugal. Mais de 10 anos de experiência em intermediação imobiliária, engenharia e remodelações. Especialistas em compra, venda e arrendamento de imóveis na região central de Portugal.",
  keywords = "imobiliária Viseu, imóveis Viseu, casas Viseu, apartamentos Viseu, comprar casa Viseu, venda imóveis Viseu, arrendamento Viseu, engenharia Viseu, remodelações Viseu",
  canonical = "",
  ogImage = "/og-image.jpg"
}) {
  const siteUrl = "https://tp3imobiliaria.pt";
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
    </Helmet>
  );
}

export default SEO;

