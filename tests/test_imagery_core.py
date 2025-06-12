"""Tests for imagery core distinct"""

def test_imagery_core_0():
    nir, red = 0.8, 0.3
    ndvi = (nir - red) / (nir + red)
    assert -1 <= ndvi <= 1

def test_imagery_core_1():
    nir, red = 0.8, 0.3
    ndvi = (nir - red) / (nir + red)
    assert -1 <= ndvi <= 1

def test_imagery_core_2():
    nir, red = 0.8, 0.3
    ndvi = (nir - red) / (nir + red)
    assert -1 <= ndvi <= 1

def test_imagery_core_3():
    nir, red = 0.8, 0.3
    ndvi = (nir - red) / (nir + red)
    assert -1 <= ndvi <= 1
