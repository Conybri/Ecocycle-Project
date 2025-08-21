"use client"

import { useState } from "react"

const MyOrdersPage = () => {
  const [orders] = useState([
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "delivered",
      total: 1248,
      items: 3,
      tracking: "TRK123456789",
    },
    {
      id: "ORD-002",
      date: "2024-01-20",
      status: "shipped",
      total: 299,
      items: 1,
      tracking: "TRK987654321",
    },
    {
      id: "ORD-003",
      date: "2024-01-25",
      status: "processing",
      total: 599,
      items: 2,
      tracking: null,
    },
  ])

  const getStatusColor = (status) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800"
      case "shipped":
        return "bg-blue-100 text-blue-800"
      case "processing":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case "delivered":
        return "Entregado"
      case "shipped":
        return "Enviado"
      case "processing":
        return "Procesando"
      default:
        return "Desconocido"
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Mis Órdenes</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-gray-600">Total Órdenes</h3>
          <p className="text-2xl font-bold text-gray-900">{orders.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-gray-600">Total Gastado</h3>
          <p className="text-2xl font-bold text-gray-900">
            ${orders.reduce((acc, order) => acc + order.total, 0).toLocaleString()}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-sm font-medium text-gray-600">Órdenes Entregadas</h3>
          <p className="text-2xl font-bold text-gray-900">
            {orders.filter((order) => order.status === "delivered").length}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Historial de Órdenes</h2>
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-4">
                      <h3 className="font-semibold text-lg">{order.id}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                        {getStatusText(order.status)}
                      </span>
                    </div>
                    <p className="text-gray-600">Fecha: {order.date}</p>
                    <p className="text-gray-600">{order.items} artículo(s)</p>
                    {order.tracking && <p className="text-sm text-blue-600">Tracking: {order.tracking}</p>}
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">${order.total}</p>
                    <div className="mt-2 space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm">Ver Detalles</button>
                      {order.status === "delivered" && (
                        <button className="text-green-600 hover:text-green-800 text-sm">Reordenar</button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyOrdersPage
