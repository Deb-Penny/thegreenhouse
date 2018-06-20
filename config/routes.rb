Rails.application.routes.draw do
 get '/thegreenhouse/index'
 get '/thegreenhouse/available_flowers_inv'
 get '/thegreenhouse/perennials'
 root to: 'thegreenhouse#index'
end