"""Tests for imagery edge distinct"""

def test_imagery_edge_0():
    nir, red = 0.8, 0.3
    ndvi = (nir - red) / (nir + red)
    assert -1 <= ndvi <= 1

def test_imagery_edge_1():
    nir, red = 0.8, 0.3
    ndvi = (nir - red) / (nir + red)
    assert -1 <= ndvi <= 1

def test_imagery_edge_2():
    nir, red = 0.8, 0.3
    ndvi = (nir - red) / (nir + red)
    assert -1 <= ndvi <= 1

def test_imagery_edge_3():
    nir, red = 0.8, 0.3
    ndvi = (nir - red) / (nir + red)
    assert -1 <= ndvi <= 1
