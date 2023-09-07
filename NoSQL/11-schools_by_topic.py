#!/usr.bin/env python3
"""
returns the list of school having a specific topic
"""
from typing import List


def schools_by_topic(mongo_collection, topic: str) -> List:
    """
    function to return the list of school having a specific topic
    """
    if mongo_collection is None:
        return None
    return mongo_collection.find({"topics": topic})
