package com.amm.ecom.store.repository;

import com.amm.ecom.store.domain.ShoppingCart;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the ShoppingCart entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ShoppingCartRepository extends JpaRepository<ShoppingCart, Long> {
}
