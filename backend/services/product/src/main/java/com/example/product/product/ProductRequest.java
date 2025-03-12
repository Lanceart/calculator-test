package com.example.product.product;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

import java.math.BigDecimal;

public record ProductRequest(
        Integer id,
        @NotNull(message = "product name is required")
        String name,

        @NotNull(message = "product description is required")
        String description,
        @Positive(message = "product description is required")
        double avaliableQuantity,
        @Positive(message = "Price should be positive")
        BigDecimal price,
        @NotNull(message = "Category is required")
        Integer categoryId
) {
}
