"use client"

import { useState } from "react"

const ProductsPage = () => {
  const [products] = useState([
    {
      id: 1,
      name: "iPhone 15 Pro",
      category: "Smartphones",
      price: 999,
      stock: 45,
      status: "active",
      image: "/modern-smartphone.png",
    },
    {
      id: 2,
      name: "MacBook Pro M3",
      category: "Laptops",
      price: 1999,
      stock: 23,
      status: "active",
      image: "/silver-macbook-pro.png",
    },
    {
      id: 3,
      name: "AirPods Pro",
      category: "Audio",
      price: 249,
      stock: 0,
      status: "out_of_stock",
      image: "/generic-wireless-earbuds.png",
    },
  ])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Gestión de Productos</h1>
        <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors">
          Agregar Producto
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-blue-600">Total Productos</h3>
              <p className="text-2xl font-bold text-blue-900">{products.length}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-green-600">En Stock</h3>
              <p className="text-2xl font-bold text-green-900">{products.filter((p) => p.stock > 0).length}</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-red-600">Sin Stock</h3>
              <p className="text-2xl font-bold text-red-900">{products.filter((p) => p.stock === 0).length}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-purple-600">Valor Total</h3>
              <p className="text-2xl font-bold text-purple-900">
                ${products.reduce((acc, p) => acc + p.price * p.stock, 0).toLocaleString()}
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Producto</th>
                  <th className="text-left py-3 px-4">Categoría</th>
                  <th className="text-left py-3 px-4">Precio</th>
                  <th className="text-left py-3 px-4">Stock</th>
                  <th className="text-left py-3 px-4">Estado</th>
                  <th className="text-left py-3 px-4">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                        <span className="font-medium">{product.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">{product.category}</td>
                    <td className="py-3 px-4">${product.price}</td>
                    <td className="py-3 px-4">{product.stock}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          product.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {product.status === "active" ? "Activo" : "Sin Stock"}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800">Editar</button>
                        <button className="text-red-600 hover:text-red-800">Eliminar</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
