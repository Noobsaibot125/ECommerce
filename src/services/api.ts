// =============================================================================
// API Service — Centralise tous les appels vers le backend
// =============================================================================

const API_BASE_URL = "http://161.97.128.98:3200";
const API_PREFIX = "/api/v1";
const CODE_STORE = "ST-20251001-BMVJF";

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

export interface ApiProduct {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  descriptionHtml: string | null;
  characteristics: { name: string; value: string }[];
  currency: string;
  unitPrice: number;
  promotion: {
    price: number;
    referencePrice: number;
    percentOff: number;
  } | null;
  effectivePrice: number;
  stock: number | null;
  isAvailable: boolean;
  categoryId: string;
  storeCategoryId: number;
  storeProductLinkId: number;
  code_store: string;
  visible_on_web: boolean;
  images: { id: string; url: string; alt: string; isPrimary: boolean }[];
  createdAt: string;
}

export interface ApiCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  parentId: string | null;
  isActive: boolean;
  visible_on_web: boolean;
}

export interface ApiBanner {
  id: string;
  title: string;
  subtitle: string;
  discountPercentage: number;
  promoCode: string;
  buttonText: string;
  targetUrl: string;
  backgroundImageUrl: string;
  backgroundColorHex: string;
  validUntil: string;
  isActive: boolean;
}

export interface ApiDeliveryCommune {
  key: string;
  label: string;
  priceFcfa: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

// Produit normalisé pour les composants frontend
export interface NormalizedProduct {
  id: string;
  name: string;
  price: number;
  oldPrice: number | null;
  image: string; // Chemin complet (local ou URL distante)
  isLiked: boolean;
  shortDescription: string;
  description: string;
  characteristics: { name: string; value: string }[];
  categoryId: string;
  isAvailable: boolean;
  promotion: ApiProduct["promotion"];
  images: ApiProduct["images"];
  slug: string;
  currency: string;
}

// -----------------------------------------------------------------------------
// Images — Fallback intelligent
// -----------------------------------------------------------------------------

/** Construit l'URL complète d'une image API, ou retourne un fallback local */
export function getProductImageUrl(
  apiPath: string | null,
  productName: string = ""
): string {
  // Pas de chemin → fallback
  if (!apiPath) return getFallbackImage(productName);

  // Placeholder du backend → fallback local
  if (apiPath.includes("dev-seed-placeholder")) {
    return getFallbackImage(productName);
  }

  // Image réelle → URL complète
  return `${API_BASE_URL}${apiPath}`;
}

/** Choisit une image locale pertinente en fonction du nom du produit */
function getFallbackImage(productName: string): string {
  const name = productName.toLowerCase();

  if (name.includes("iphone") || name.includes("ecran iphone"))
    return "/images/Home/product_iphone_14_gold.png";
  if (name.includes("macbook air"))
    return "/images/Home/feature_macbook_air.png";
  if (name.includes("macbook pro") || name.includes("macbook"))
    return "/images/Home/popular_macbook_pro.png";
  if (name.includes("imac"))
    return "/images/Home/popular_macbook_pro.png";
  if (name.includes("ipad"))
    return "/images/Home/product_ipad_9.png";
  if (name.includes("airpods") || name.includes("casque"))
    return "/images/Home/product_airpods_pro.png";
  if (name.includes("watch") || name.includes("montre"))
    return "/images/Home/feature_apple_watch.png";
  if (name.includes("disque") || name.includes("ssd"))
    return "/images/Home/category_camera.png";

  // Fallback générique pour produits sans correspondance (aliments, etc.)
  return "/images/Home/product_airpods_pro.png";
}

// -----------------------------------------------------------------------------
// Normalisation — Transforme les données API vers le format des composants
// -----------------------------------------------------------------------------

export function normalizeProduct(p: ApiProduct): NormalizedProduct {
  const primaryImg =
    p.images?.find((i) => i.isPrimary) || p.images?.[0] || null;
  const imageUrl = getProductImageUrl(primaryImg?.url || null, p.name);

  return {
    id: p.id,
    name: p.name,
    slug: p.slug,
    price: p.effectivePrice,
    oldPrice: p.promotion ? p.unitPrice : null,
    image: imageUrl,
    isLiked: false,
    shortDescription: p.shortDescription || "",
    description: p.description || "",
    characteristics: p.characteristics || [],
    categoryId: p.categoryId,
    isAvailable: p.isAvailable,
    promotion: p.promotion,
    images: p.images || [],
    currency: p.currency || "F CFA",
  };
}

// -----------------------------------------------------------------------------
// Fetch — Produits
// -----------------------------------------------------------------------------

export async function fetchProducts(
  params: {
    page?: number;
    limit?: number;
    categoryId?: string;
    search?: string;
    priceMin?: number;
    priceMax?: number;
    onPromotion?: boolean;
  } = {}
): Promise<PaginatedResponse<ApiProduct>> {
  const { page = 1, limit = 10, ...rest } = params;
  const qp = new URLSearchParams({
    code_store: CODE_STORE,
    page: String(page),
    limit: String(limit),
  });

  if (rest.categoryId) qp.append("categoryId", rest.categoryId);
  if (rest.search) qp.append("search", rest.search);
  if (rest.priceMin !== undefined) qp.append("priceMin", String(rest.priceMin));
  if (rest.priceMax !== undefined) qp.append("priceMax", String(rest.priceMax));
  if (rest.onPromotion) qp.append("onPromotion", "true");

  const res = await fetch(
    `${API_BASE_URL}${API_PREFIX}/web/catalog/products?${qp}`
  );
  if (!res.ok) throw new Error(`Erreur API produits: ${res.status}`);
  return res.json();
}

/** Récupère un seul produit par son ID */
export async function fetchProduct(id: string): Promise<ApiProduct> {
  const res = await fetch(
    `${API_BASE_URL}${API_PREFIX}/web/catalog/products/${id}?code_store=${CODE_STORE}`
  );
  if (!res.ok) throw new Error(`Erreur API produit ${id}: ${res.status}`);
  return res.json();
}

// -----------------------------------------------------------------------------
// Fetch — Catégories
// -----------------------------------------------------------------------------

export async function fetchCategories(): Promise<ApiCategory[]> {
  const res = await fetch(
    `${API_BASE_URL}${API_PREFIX}/web/catalog/categories?code_store=${CODE_STORE}`
  );
  if (!res.ok) throw new Error(`Erreur API catégories: ${res.status}`);
  return res.json();
}

// -----------------------------------------------------------------------------
// Fetch — Bannières
// -----------------------------------------------------------------------------

export async function fetchBanners(): Promise<ApiBanner[]> {
  const res = await fetch(
    `${API_BASE_URL}${API_PREFIX}/web/catalog/banners?code_store=${CODE_STORE}`
  );
  if (!res.ok) throw new Error(`Erreur API bannières: ${res.status}`);
  return res.json();
}

// -----------------------------------------------------------------------------
// Fetch — Communes de livraison
// -----------------------------------------------------------------------------

export async function fetchDeliveryCommunes(): Promise<ApiDeliveryCommune[]> {
  const res = await fetch(
    `${API_BASE_URL}${API_PREFIX}/web/catalog/delivery-communes?code_store=${CODE_STORE}`
  );
  if (!res.ok) throw new Error(`Erreur API communes: ${res.status}`);
  return res.json();
}

// -----------------------------------------------------------------------------
// POST — Commande Proforma
// -----------------------------------------------------------------------------

export interface ProformaOrderPayload {
  firstName: string;
  lastName: string;
  deliveryAddress: string;
  phone: string;
  email?: string;
  deliveryCommuneKey?: string;
  deliveryAmount: number;
  createAccount: boolean;
  payment_method: string;
  items: {
    product_id: number;
    quantity: number;
    selectedCharacteristics?: { name: string; value: string }[];
  }[];
}

export async function submitProformaOrder(
  payload: ProformaOrderPayload
): Promise<unknown> {
  const res = await fetch(
    `${API_BASE_URL}${API_PREFIX}/web/catalog/orders/proforma?code_store=${CODE_STORE}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );
  if (!res.ok) throw new Error(`Erreur commande: ${res.status}`);
  return res.json();
}
