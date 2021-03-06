# Module 3 - README.md Project


## Local Market


### Description

This app wants to be a site where local small shops can sell their products online through a marketplace. Clients can buy online local products from their neighborhood stores. 

### User Stories

**Seller Signup** - Sellers can sign up to the app and start uploading their own projects. 
**Seller Login** - Sellers can log in to their dashboard and manage their products. 
**Seller Logout** - Sellers can logout from the app so no one else can use it. 
**Seller Dashboard** - Sellers have a dashboard where to manage their seller profile, products, orders, chat with clients, overview of their sales. 
**View sellers products** - Sellers have a dashboard where to manage their products. 
**Add products** - Sellers can upload their products. 
**Edit products** - Sellers can edit their products after creating it. 
**Delete product** - Sellers can delete their products. 
**Home** - All users can see a home with all products categories they can find on the local market. 
**View Products** - After selectiong a category, users can see all products belonging it.
**View Product Details** - User can see all details of a product.  
**Client Signup** - Clients can register to the app. 
**Client Login** - Clients log in to their personal dashboard. 
**Client Dashboard** -Clients have a personal dashboard where to manage their client profile, follow up their orders, have an overview of their purchases, add their favourites products and chat with sellers.
**Client Logout** - Clients can logout from the app so no one else can use it. 

### Backlog
* Chat client - seller. 
* Export xls with an overview of sales / purchases. 
* Payment method


## Client / Frontend

### React Router Routes (React App)
| Path                      | Component            | Permissions                 | Behavior                                                     |
| ------------------------- | -------------------- | --------------------------- | ------------------------------------------------------------ |
| `/`                       | HomePage             | public `<Route>`            | Home page    
| `/:category`              | ProductCard          | public `<Route>`            | Page with the product's cards of the selected category  |
| `/:category/:id`          | ProductDetail         | public `<Route>`           | Page with all the product details and information  |
| `/sellerSignup`           | SignupPage           | anon only  `<AnonRoute>`    | Signup form, link to login, navigate to seller dashboard after signup |
| `/sellerLogin`            | LoginPage            | anon only `<AnonRoute>`     | Login form, link to signup, navigate to seller dashboard after login |
| `/products`               | MyProducts           | seller only `<PrivateRoute>`  | Page that shows all seller producnts in a list                |
| `/products/add`           | AddProductForm       | seller only `<PrivateRoute>`  | New product form, adds a new product and redirects to projects list once project has been added |
| `/products/:id`           | ProductDetail        | seller only `<PrivateRoute>`  | Page with the details of a project and a link to edit the product |
| `/products/:id-edit`      | ProductEditForm      | seller only `<PrivateRoute>`  | Page with a form to edit the product |
| `/profile`                | MyProfile            | seller only `<PrivateRoute>`  | Page with the seller profile information |
| `/profile/:id-edit`        | ProfileEditForm     | seller only `<PrivateRoute>`  | Page with a form to edit the seller profile |


### Components

* Home
* CategoryPage
* ProductDetailPage
* SellerSignupPage
* SellerLoginPage
* MyProductsPage
    * ProductCard
    * CreateProductForm
    * EditProductForm
    * ViewProductDetails
    * DeleteProduct
* MyProfilePage
    * EditProfileForm
* Common
    * Navbar (if no logged, if seller logged, if client logged)
    * Footer
    * Searchbar
    * Filter buttons
    * Buttons


### Services

* AuthSeller Service
    * authSellerApi.signup(seller)
    * authSellerApi.login(seller)
    * authSellerApi.logout()

* MyProducts Service
    * myProductsApi.getMyProducts()
    * myProductsApi.getMyProductDetails(myProductId)
    * myProductsApi.addProduct(product)
    * myProductsApi.editProduct(productId, productBody)
    * myProductsApi.deleteProduct(productId)

* Public Service
    * productsApi.getProducts()
    * productsApi.getProductDetails(productId)

## Server / Backend

### Models
Seller model: 
{
    email
    password
    profileImage
    publicName
    myProducts: [ { type: mongoose.Schema.Types.ObjectId, ref: "Product" } ]
    location
}

Product model: 
{
    title
    ref
    category: []
    price
    mainProductImage
    moreProductImages: []
    description
    size
    color
}


## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| POST        | `/auth/signup`                | {email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                 | {email, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`                | (empty)                      | 204            | 400          | Logs out the seller                                            |
| GET         | `/auth/myProducts`               |                              |                | 400          | Sends all seller products                                         |
| GET         | `/auth/myProducts/:productId`           | {id}                         |                |              | Sends one specific product        |
| POST        | `/auth/addProduct`               | {title, price, description}       | 201            | 400          | Create and saves a new product in the DB                   |
| PUT         | `/auth/myProducts/:productId`           | {title, ref, category, description, price, mainProductImage, moreProductImages}              | 200            | 400          | Edits products in the DB                           |
| DELETE      | `/auth/products/:productId`          | {id}                         | 201            | 400          | Deletes product    |
| GET      | `/auth/myProfile`          | {}                         | 201            | 400          | Seller Profile Details   |
| PUT      | `/auth/myProfile/:myProfileId`          | {}                         | 201            | 400          | Edit Seller Profile Details   |



## Links

### Trello

[Link to the trello board](https://trello.com/b/QBYblUQX/localmarket) 

### Git

The urls to the repositories and to deployed project

[Client repository Link](https://github.com/monibix/localMarket-client)

[Server repository Link](https://github.com/monibix/localMarket-server)

[Deployed App Link](http://netlify.com/)

### Slides

The url to the slides presentation

[Slides Link](http://slides.com)
